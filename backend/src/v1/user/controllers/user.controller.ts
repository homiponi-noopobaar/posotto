import {
  Controller,
  Get,
  Param,
  NotFoundException,
  UseGuards,
  Post,
  Request,
  Body
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:publicId')
  async getProfileByPublicId(@Param('publicId') publicId: string) {
    const profile = this.userService.findUserbyPublicId(publicId);
    return await profile;
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createUser(@Body() Body:CreateUserDto,@Request() req) {
    const user = await this.userService.createUser({...Body, id:req.user_id});
    return user;
  }
}
