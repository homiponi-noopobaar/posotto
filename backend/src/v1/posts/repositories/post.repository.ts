import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Post, PostDetail } from '../types/Post';

@Injectable()
export class PostRepository {
  constructor(private prisma: PrismaService) {}

  async createPost(data: {
    content: string;
    user_id: string;
    created_at: Date;
  }): Promise<Post> {
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
    const post = this.prisma.post.findUnique({
      select: {
        id: true,
        content: true,
        created_at: true,
        user_id: true,
        user: {
          select:{
            id: true,
            publicId: true,
            img_url: true,
            nickname: true,
            isPublic: true
          }
        },
        comments: {
          select: {
            id: true,
            content: true,
            created_at: true,
            user: {
              select:{
                publicId: true,
                img_url: true,
                nickname: true,
                isPublic: true
              }
            }
          }
        },
        favorites: {
          select: {
            user: {
              select:{
                publicId: true,
                img_url: true,
                nickname: true,
                isPublic: true
              }
            }
          },
        },
        _count: { select: { favorites: true , comments: true } },
      },
      where: { id },
    });

      return post;
    } catch (e) {
      console.log(e);
    }
  }

  async findAllPosts(): Promise<Post[]> {
    try {
      const posts = await this.prisma.post.findMany({
        select: {
          id: true,
          content: true,
          created_at: true,
          user: {
            select: {
              id: true,
              publicId: true,
              img_url: true,
              nickname: true,
              isPublic: true,
            },
          },
        },
      });
      return posts;
    } catch (e) {
      console.log(e);
    }
  }
}
