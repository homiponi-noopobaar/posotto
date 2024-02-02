import { Module } from '@nestjs/common';
import { CommentController } from './controllers/comment.controller';
import { CommentService } from './services/comment.service';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { CommentRepository } from './repositories/comment.repository';

@Module({
  controllers: [CommentController],
  providers: [
    CommentRepository,
    CommentService,
    AuthService,
    PrismaService,
  ],
})
export class CommentModule {}
