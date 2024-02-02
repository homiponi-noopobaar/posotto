import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts.controller';
import { PostService } from './services/post.service';
import { PrismaService } from 'prisma/prisma.service';
import { AudioRecognitionModule } from './module/audio-recognition.module';
import { AudioRecognitionService } from './services/audio-recognition.service';
import { PostRepository } from './repositories/post.repository';

@Module({
  imports: [AudioRecognitionModule],
  controllers: [PostsController],
  providers: [
    PostRepository,
    PostService,
    AudioRecognitionService,
    PrismaService,
  ],
})
export class PostModule {}
