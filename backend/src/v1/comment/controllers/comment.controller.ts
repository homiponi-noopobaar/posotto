import { Controller, Get, Param, NotFoundException, UseGuards, Post, Body } from '@nestjs/common';
import { CommentService } from '../services/comment.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('v1/Comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}
    
    @Get()
    async hello(){
        return "Hello"
    }

    @Post()
    async createComment(@Body() body: { post_id: bigint, user_id: string, content: string}){
        return await this.commentService.createComment(body.post_id, body.user_id, body.content)
    }
}
