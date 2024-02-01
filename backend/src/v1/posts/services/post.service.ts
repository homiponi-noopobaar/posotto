// src/posts/services/post.service.ts

import { Injectable} from '@nestjs/common';
import { PostRepository } from '../repositories/post.repository';
import { CreatePostDto } from '../dto/create-post.dto';
import { AudioRecognitionService } from './audio-recognition.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class PostService {
  constructor(
    private postRepository: PostRepository,
    private audioRecognitionService: AudioRecognitionService,
    private authService: AuthService,
  ) {}

  /**
   *  createPost: 音声認識を行い、認識したテキストをDBに保存する
   * @param createPostDto
   * @returns
   */
  async createPost(createPostDto: CreatePostDto) {
    try {
      const {content,user_id,created_at} = createPostDto;
      const user = await this.authService.getUser(user_id);
      // console.log(content);
      
      
      const recognizedText = await this.audioRecognitionService.recognizeAudio(
        content.buffer,
      );
      const newPostData = {
        user_id: user.id,
        created_at: created_at,
        content: recognizedText,
      };
      const newPost = await this.postRepository.createPost(newPostData);
      return newPost;
    } catch (e) {
      console.log(e);
    }
  }

  async findAllPosts() {
    const user_id = await this.authService.getCrrentUserId();
    //limitTimeに24時間を入れて、24時間以内の投稿のみを取得する
    const limitTime = {year: 0, month: 0, day: 1, hour: 0, minute: 0, second: 0}
    const posts = await this.postRepository.findAllPosts(limitTime);
    const newPosts = posts.map((post) => {
      const favorites = post.favorites;
      return {id: post.id, user: post.user, content: post.content, created_at: post.created_at, _count: post._count, isLiked: favorites.some((favorite) => favorite.user_id === user_id)};
    });
    return posts;
  }
  
  async getPostDetail(id: number) {
    const user_id = await this.authService.getCrrentUserId();
    const post = await this.postRepository.findPostById(id);
    const favorites = post.favorites;
    const newPost = {id: post.id, user: post.user, content: post.content, created_at: post.created_at, _count: post._count, isLiked: favorites.some((favorite) => favorite.user_id === user_id)};
    return newPost;
  }
}