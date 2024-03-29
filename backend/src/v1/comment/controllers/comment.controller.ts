import {
  Controller,
  Get,
  Param,
  NotFoundException,
  UseGuards,
  Post,
  Body,
} from '@nestjs/common';
import { CommentService } from '../services/comment.service';

@Controller('v1/comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async hello() {
    return 'Hello';
  }

  @Post()
  async createComment(
    @Body() body: { post_id: bigint; user_id: string; content: string },
  ) {
    return await this.commentService.createComment(
      body.post_id,
      body.user_id,
      body.content,
    );
  }
}
