// src/posts/services/post.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PostRepository } from './repositories/post.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { AudioRecognitionService } from './services/audio-recognition.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class PostService {
  constructor(
    private postRepository: PostRepository,
    private audioRecognitionService: AudioRecognitionService,
    private authService: AuthService,
  ) {}

  async createPost(createPostDto: CreatePostDto, userId: string) {
    const user = await this.authService.getUser(userId);
    const recognizedText = await this.audioRecognitionService.recognizeAudio(
      createPostDto.content.path,
    );
    const newPost = {
      user_id: createPostDto.user_id,
      created_at: createPostDto.created_at,
      content: recognizedText,
    };
    return this.postRepository.createPost(
      newPost.content,
      newPost.user_id,
      newPost.created_at,
    );
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
