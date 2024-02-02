import {
  Controller,
  Get,
  Param,
  NotFoundException,
  UseGuards,
  Post,
  Body,
} from '@nestjs/common';
import { FavoriteService } from '../services/favorite.service';

@Controller('v1/favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Get()
  async hello() {
    return 'Hello';
  }

  @Post()
  async changeFavorite(@Body() body: { user_id: string; post_id: bigint }) {
    return await this.favoriteService.changeFavorite(
      body.user_id,
      body.post_id,
    );
  }
}
