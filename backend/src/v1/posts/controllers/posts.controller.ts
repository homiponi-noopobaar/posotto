import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  Get,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostService } from '../services/post.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly appService: PostService) {}

  @Get()
  fetchAllPosts() {
    return this.appService.findAllPosts();
  }

  @Post()
  // @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('content'))
  async createPost(
    @UploadedFile() content: Express.Multer.File,
    @Body() createPostDto: CreatePostDto,
  ) {
    console.log(content);

    createPostDto.content = content;

    return await this.appService.createPost(createPostDto);
  }
}
