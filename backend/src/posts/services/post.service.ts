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
   * @param userId
   * @returns
   */
  async createPost(createPostDto: CreatePostDto, userId: string) {
    try {
      const user = await this.authService.getUser(userId);
      const recognizedText = await this.audioRecognitionService.recognizeAudio(
        createPostDto.content.path,
      );
      const newPostData = {
        user_id: user.id,
        created_at: createPostDto.created_at,
        content: recognizedText,
      };
      const newPost = await this.postRepository.createPost(newPostData);
      return newPost;
    } catch (e) {
      console.log(e);
    }
  }

  async findPostById(id: number) {
    const post = await this.postRepository.findPostById(id);
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async findAllPosts() {
    const posts = await this.postRepository.findAllPosts();
    return posts;
  }
  // 他のメソッド（updatePost, deletePostなど）も同様に定義
}
