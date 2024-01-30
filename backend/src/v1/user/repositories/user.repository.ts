import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findProfilebyPublicId(publicId: string){
    const profile =  this.prisma.user.findUnique({
      select: {
        img_url: true,
        isPublic: true,
        link: true,
        birthday: true,
        comment: true,
        posts: {
          select: {
            id: true,
            content: true,
            _count: {
              select: { favorites: true }
            }
          }
        },
        _count:{
          select: {
            follower: true,
            followed: true
          }
        },
      },
      where: { publicId },
    });
  
    return profile
  }
}
