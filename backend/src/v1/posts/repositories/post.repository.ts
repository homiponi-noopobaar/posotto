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
      return {
        ...newPost[0],
        user: newPost[1],
        favorites: [],
        _count: { favorites: 0 },
      };
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
        },
        where: { id },
      });

      return post;
    } catch (e) {
      console.log(e);
    }
  }

  async findAllPosts(data: {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
  }): Promise<Post[]> {
    const { year, month, day, hour, minute, second } = data;
    // dataには24時間以内の投稿のみを取得するための日付データが入っている
    // dataの時間制限以内の投稿を取得する
    //現在時刻を入れる
    let now = new Date();
    now.setFullYear(now.getFullYear() - year);
    now.setMonth(now.getMonth() - month);
    now.setDate(now.getDate() - day);
    now.setHours(now.getHours() - hour);
    now.setMinutes(now.getMinutes() - minute);
    now.setSeconds(now.getSeconds() - second);
    const limitDate = now;
    const posts = await this.prisma.post.findMany({
      where: {
        created_at: {
          gte: limitDate,
        },
      },
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
        favorites: {
          select: { post_id: true, user_id: true },
        },
        _count: { select: { favorites: true } },
      },
    });

    return posts;
  }
}
