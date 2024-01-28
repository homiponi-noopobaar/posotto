import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostService } from '../post.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly appService: PostService) {}
  @Get()
  fetchAllPosts() {
    return this.appService.findAllPosts();
  }

  @Post()
  @UseInterceptors(FileInterceptor('content'))
  createPost(
    @UploadedFile() content: Express.Multer.File,
    @Body() createPostDto: CreatePostDto,
  ) {
    // ここでファイルと他のデータを処理
  }
}
