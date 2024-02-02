import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Favorite } from '@prisma/client';

@Injectable()
export class FavoriteRepository {
  constructor(private prisma: PrismaService) {}

  async createFavorite(data:{user_id: string, post_id: bigint}): Promise<Favorite> {
    return this.prisma.favorite.create({
      data: {
        user_id: data.user_id,
        post_id: data.post_id
      }
    });
  }

  async deleteFavorite(user_id: string,post_id: bigint): Promise<Favorite> {
    return this.prisma.favorite.delete({
      where: {
        user_id_post_id: {
          user_id: user_id,
          post_id: post_id
        }
      }
    });
  }

  async findFavoriteByUserIdAndPostId(user_id: string, post_id: bigint): Promise<Favorite | null> {
    return this.prisma.favorite.findUnique({
      where: {
        user_id_post_id: {
          user_id: user_id,
          post_id: post_id
        }
      }
    });
  }
}
