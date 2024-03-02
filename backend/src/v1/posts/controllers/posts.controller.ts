import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  Get,
  Param,
  Request,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostService } from '../services/post.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ConvertTextDto } from '../dto/convert-text.dto';

@Controller('v1/posts')
export class PostsController {
  constructor(private readonly appService: PostService) {}

  // 認証の有無で処理を分けているが、通さないべきなので、修正が必要
  @UseGuards(JwtAuthGuard)
  @Get()
  async fetchAllPosts(@Request() req) {
    if (!req.user_id) {
      console.log('no user_id');
      return await this.appService.findAllPosts({ user_id: null });
    } else {
      return await this.appService.findAllPosts({ user_id: req.user_id });
    }
  }

  @Get('/:PostId')
  async getPostDetail(@Param('PostId') postId: number) {
    return await this.appService.getPostDetail({ postId: postId });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createPost(@Body() createPostDto: CreatePostDto, @Request() req) {
    console.log(req.user);
    return await this.appService.createPost({
      ...createPostDto,
      user_id: req.user.userId,
    });
  }

  // @UseGuards(JwtAuthGuard)
  @Post('/voice')
  async convertText(
    @Body() ConvertTextDto:ConvertTextDto,
  ) {
    console.log("-----------voice-----------");
    return await this.appService.convertText(ConvertTextDto);
  }

  // @Post('/voice')
  // @UseInterceptors(FileInterceptor('content'))
  // async convertVoiceToText(
  //   @UploadedFile() content: Express.Multer.File,
  //   @Request() req,
  // ) {
  //   return await this.appService.convertVoiceToText(content);
  // }
}
