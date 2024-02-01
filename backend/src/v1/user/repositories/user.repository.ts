import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { User } from 'src/v1/user/types/User';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  //  いらないカラムがあるかも
  async findProfilebyPublicId(publicId: string): Promise<User> {
    const profile = this.prisma.user.findUnique({
      select: {
        id:true,
        nickname:true,
        img_url: true,
        isPublic: true,
        link: true,
        birthday: true,
        comment: true,
        posts: {
          select: {
            id: true,
            content: true,
            created_at:true,
            _count: {
              select: { favorites: true },
            },
          },
        },
        _count: {
          select: {
            follower: true,
            followed: true,
          },
        },
      },
      where: { publicId },
    });

    return profile;
  }
}
