import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts.controller';
import { PostService } from './post.service';
import { PostRepository } from './repositories/post.repository';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { AudioRecognitionModule } from './module/audio-recognition.module';
import { AudioRecognitionService } from './services/audio-recognition.service';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
    imports: [PrismaModule, AudioRecognitionModule,AuthModule],
    controllers: [PostsController],
    providers: [PostRepository, PostService, PrismaService, AudioRecognitionService,AuthService],
  })
  export class PostModule {}
  
