import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './v1/posts/controllers/posts.controller';
import { PostModule } from './v1/posts/post.module';
import { PostService } from './v1/posts/services/post.service';
import { PostRepository } from './v1/posts/repositories/post.repository';
import { AudioRecognitionService } from './v1/posts/services/audio-recognition.service';
import { PrismaService } from 'prisma/prisma.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { UserController } from './v1/user/controllers/user.controller';
import { UserModule } from './v1/user/user.module';
import { UserService } from './v1/user/services/user.service';
import { UserRepository } from './v1/user/repositories/user.repository';
import { FollowController } from './v1/follow/controllers/follow.controller';
import { FollowModule } from './v1/follow/follow.module';
import { FollowService } from './v1/follow/services/follow.service';
import { FollowRepository } from './v1/follow/repositories/follow.repository';
import { FavoriteController } from './v1/favorite/controllers/favorite.controller';
import { FavoriteModule } from './v1/favorite/favorite.module';
import { FavoriteService } from './v1/favorite/services/favorite.service';
import { FavoriteRepository } from './v1/favorite/repositories/favorite.repository';
import { CommentService } from './v1/comment/services/comment.service';
import { CommentRepository } from './v1/comment/repositories/comment.repository';
import { CommentController } from './v1/comment/controllers/comment.controller';
import { CommentModule } from './v1/comment/comment.module';

@Module({
  imports: [
    PostModule,
    UserModule,
    FollowModule,
    FavoriteModule,
    CommentModule,
  ],
  controllers: [
    AppController,
    PostsController,
    UserController,
    FollowController,
    FavoriteController,
    CommentController,
  ],
  providers: [
    AppService,
    PostService,
    PostRepository,
    UserService,
    UserRepository,
    FollowService,
    FollowRepository,
    FavoriteService,
    FavoriteRepository,
    CommentService,
    CommentRepository,
    AudioRecognitionService,
    PrismaService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
