import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Follow } from '@prisma/client';

@Injectable()
export class FollowRepository {
  constructor(private prisma: PrismaService) {}

  async createFollow(data:{follower_id: string, following_id: string}): Promise<Follow> {
    return this.prisma.follow.create({
      data: {
        follower_id: data.follower_id,
        following_id: data.following_id
      }
    });
  }
}
