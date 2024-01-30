import { Controller, Get, Param, NotFoundException, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Get('/:publicId')
    async getProfileByPublicId(@Param('publicId') publicId: string){
        const profile = this.userService.findUserbyPublicId(publicId);
        return await profile
    }
}
