import { Controller, Get, Param, NotFoundException, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Get('/:id')
    async getProfileById(@Param('id') id: string){
        const profile = this.userService.findUserbyId(id);
        return await profile
    }
}
