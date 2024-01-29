import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/controllers/posts.controller';
import { PostModule } from './posts/post.module';
import { PostService } from './posts/services/post.service';
import { PostRepository } from './posts/repositories/post.repository';
import { AudioRecognitionService } from './posts/services/audio-recognition.service';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from './auth/auth.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter';

@Module({
  imports: [PostModule],
  controllers: [AppController, PostsController],
  providers: [
    AppService,
    PostService,
    PostRepository,
    AudioRecognitionService,
    PrismaService,
    AuthService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
