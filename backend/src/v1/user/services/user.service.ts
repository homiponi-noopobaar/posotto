import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private authService: AuthService,
  ) {}

  async findUserbyPublicId(publicId: string) {
    const user = await this.userRepository.findProfilebyPublicId(publicId);
    return user
  }
}
