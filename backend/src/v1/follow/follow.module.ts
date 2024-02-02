import { Module } from '@nestjs/common';
import { FollowController } from './controllers/follow.controller';
import { FollowService } from './services/follow.service';
import { PrismaService } from 'prisma/prisma.service';
import { FollowRepository } from './repositories/follow.repository';

@Module({
  controllers: [FollowController],
  providers: [FollowRepository, FollowService, PrismaService],
})
export class FollowModule {}
