import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Comment } from '@prisma/client';
import { create } from 'domain';

@Injectable()
export class CommentRepository {
  constructor(private prisma: PrismaService) {}

  async createComment(data:{post_id: bigint, user_id: string, content: string}): Promise<Comment> {
    return this.prisma.comment.create({
      data: {
        post_id: data.post_id,
        user_id: data.user_id,
        content: data.content,
        created_at: new Date()
      }
    });
  }
}
