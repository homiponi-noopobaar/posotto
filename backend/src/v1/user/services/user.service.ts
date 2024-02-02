import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
  ) {}

  async findUserbyPublicId(publicId: string) {
    const user = await this.userRepository.findProfilebyPublicId(publicId);
    return user;
  }
}
