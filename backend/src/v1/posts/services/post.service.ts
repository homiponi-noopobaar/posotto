// src/posts/services/post.service.ts

import { Injectable } from '@nestjs/common';
import { PostRepository } from '../repositories/post.repository';
import { CreatePostDto } from '../dto/create-post.dto';
import { AudioRecognitionService } from './audio-recognition.service';
import { GetPostDto } from '../dto/get-posts-all.dto';
import { GetPostDetailDto } from '../dto/get-post-detail.dto';
import { ConvertTextDto } from '../dto/convert-text.dto';

@Injectable()
export class PostService {
  constructor(
    private postRepository: PostRepository,
    private audioRecognitionService: AudioRecognitionService,
  ) {}
  /**
   *
   */
  async convertText(convertTextDto: ConvertTextDto) {
    try {
      console.log('-----------------');
      const { text } = convertTextDto;
      // console.log(content);
      const recognizedText = await this.audioRecognitionService.recognizeAudioText(
        text,
      );
      return {text:recognizedText};
    } catch (e) {
      console.log(e);
    }
  }

  /**
   *  createPost: 音声認識を行い、認識したテキストをDBに保存する
   * @param createPostDto
   * @returns
   */
  async createPost(createPostDto: CreatePostDto&{user_id:string}) {
    try {
      console.log('-----------------');
      console.log(createPostDto);
      const post = await this.postRepository.createPost(createPostDto);
      return post;
    } catch (e) {
      console.log(e);
    }
  }

  async findAllPosts(GetPostDto: GetPostDto) {
    const { user_id } = GetPostDto;

    //limitTimeに24時間を入れて、24時間以内の投稿のみを取得する
    const limitTime = {
      year: 0,
      month: 0,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0,
    };
    const posts = await this.postRepository.findAllPosts(limitTime);
    const newPosts = posts.map((post) => {
      const favorites = post.favorites;
      return {
        id: post.id,
        user: post.user,
        content: post.content,
        created_at: post.created_at,
        _count: post._count,
        isLiked: user_id
          ? favorites.some((favorite) => favorite.user_id === user_id)
          : false,
      };
    });

    return newPosts;
  }

  // todo:detailも時間の制限をかける
  async getPostDetail(GetPostDto: GetPostDetailDto) {
    const { postId, user_id } = GetPostDto;
    const post = await this.postRepository.findPostById(postId);
    const favorites = post.favorites;
    const newPost = {
      id: post.id,
      user: post.user,
      content: post.content,
      created_at: post.created_at,
      _count: post._count,
      isLiked: favorites.some((favorite) => favorite.user_id === user_id),
    };
    return newPost;
  }
}
