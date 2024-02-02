import { Injectable, NotFoundException } from '@nestjs/common';

import { CommentRepository } from '../repositories/comment.repository';

@Injectable()
export class CommentService {
  constructor(
    private commentRepository: CommentRepository,
  ) {}

  async createComment(post_id: bigint, user_id: string, content: string) {
    const newCommentData = {
      post_id: post_id,
      user_id: user_id,
      content: content,
    };
    const newPost = await this.commentRepository.createComment(newCommentData);
    return newPost;
  }
}
