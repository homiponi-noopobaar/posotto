import { Controller, Get, Param, NotFoundException, UseGuards, Post, Body } from '@nestjs/common';
import { FollowService } from '../services/follow.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('v1/follow')
export class FollowController {
    constructor(private readonly followService: FollowService) {}
    
    @Get()
    async hello(){
        return "Hello"
    }

    @Post()
    async createFollow(@Body() body: { follower_id: string, following_id: string}){
        console.log(body.follower_id, body.following_id)
        return await this.followService.createFollow(body.follower_id, body.following_id)
    }
}
