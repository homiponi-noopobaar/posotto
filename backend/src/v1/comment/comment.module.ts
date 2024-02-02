import { Module } from '@nestjs/common';
import { CommentController } from './controllers/comment.controller';
import { CommentService } from './services/comment.service';
import { PrismaService } from 'prisma/prisma.service';
import { CommentRepository } from './repositories/comment.repository';

@Module({
  controllers: [CommentController],
  providers: [CommentRepository, CommentService,  PrismaService],
})
export class CommentModule {}
