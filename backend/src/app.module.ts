import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './v1/posts/controllers/posts.controller';
import { PostModule } from './v1/posts/post.module';
import { PostService } from './v1/posts/services/post.service';
import { PostRepository } from './v1/posts/repositories/post.repository';
import { AudioRecognitionService } from './v1/posts/services/audio-recognition.service';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from './auth/auth.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { UserController } from './v1/user/controllers/user.controller';
import { UserModule } from './v1/user/user.module';
import { UserService } from './v1/user/services/user.service';
import { UserRepository } from './v1/user/repositories/user.repository';

@Module({
  imports: [PostModule, UserModule],
  controllers: [AppController, PostsController, UserController],
  providers: [
    AppService,
    PostService,
    PostRepository,
    UserService,
    UserRepository,
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
