import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostService } from '../services/post.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('v1/posts')
export class PostsController {
  constructor(private readonly appService: PostService) {}

  @Get()
  async fetchAllPosts() {
    return await this.appService.findAllPosts();
  }

  @Get("/:PostId")
  async getPostDetail(@Param('PostId') postId: number) {
    return await this.appService.getPostDetail(postId);
  }

  @Post()
  // @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('content'))
  async createPost(
    @UploadedFile() content: Express.Multer.File,
    @Body() createPostDto: CreatePostDto,
  ) {

    createPostDto.content = content;

    return await this.appService.createPost(createPostDto);
  }
}
