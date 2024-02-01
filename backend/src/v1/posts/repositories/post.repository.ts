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
    try {
      const post = this.prisma.post.create({
        data: {
          content: content,
          created_at: created_at,
          user_id: user_id,
        },
      });
      const user = this.prisma.user.findUnique({
        where: { id: user_id },
        select: {
          id: true,
          publicId: true,
          img_url: true,
          nickname: true,
          isPublic: true,
        },
      });
      const newPost = await this.prisma.$transaction([post, user]);
      return { ...newPost[0], user: newPost[1] };
    } catch (e) {
      console.log(e);
    }
  }

  async findPostById(id: number): Promise<PostDetail | null> {
    try {
      const post = this.prisma.post.findUnique({
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
          comments: {
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
          },
          favorites: { 
            select: { post_id: true, user_id: true} 
          },
          _count: { select: { favorites: true } },
        },
        where: { id },
      });

      return post;
    } catch (e) {
      console.log(e);
    }
  }

  async findAllPosts(): Promise<Post[]> {
    const posts = await this.prisma.post.findMany({
      select: { 
        id: true,
        content: true,
        created_at: true,
        user: {
          select:{
            id: true,
            publicId: true,
            img_url: true,
            nickname: true,
            isPublic: true
          }
        },
        favorites: {
          select: { post_id: true, user_id: true}
        },
        _count: { select: { favorites: true } },
      },
    });

    return posts;
  }

}
