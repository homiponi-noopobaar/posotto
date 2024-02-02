import {
  Controller,
  Get,
  Param,
  NotFoundException,
  UseGuards,
  Post,
  Body,
} from '@nestjs/common';
import { FollowService } from '../services/follow.service';

@Controller('v1/follow')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Get()
  async hello() {
    return 'Hello';
  }

  @Post()
  async createFollow(
    @Body() body: { follower_id: string; following_id: string },
  ) {
    return await this.followService.createFollow(
      body.follower_id,
      body.following_id,
    );
  }
}
