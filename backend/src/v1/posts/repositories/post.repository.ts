import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Post } from '@prisma/client';

@Injectable()
export class PostRepository {
  constructor(private prisma: PrismaService) {}

  async createPost(data:{content: string, user_id: string,created_at:Date}): Promise<Post> {
    const { content, user_id, created_at } = data;
    return this.prisma.post.create({
      data: {
        content: content,
        created_at: created_at,
        user_id: user_id,
      },
    });
  }

  async findPostById(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async findAllPosts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

}
