// src/posts/services/post.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
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
      
      
      const recognizedText = await this.audioRecognitionService.recognizeAudio(
        content.path,
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
    const posts = await this.postRepository.findAllPosts();
    return posts;
  }
  // 他のメソッド（updatePost, deletePostなど）も同様に定義
}
