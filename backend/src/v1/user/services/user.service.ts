import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { RequestCreateUser } from '../types/User';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
  ) {}

  //todo: tokenを使っていいねの判定を行う
  async findUserbyPublicId(publicId: string) {
    const user = await this.userRepository.findProfilebyPublicId(publicId);
    return user;
  }

  async createUser(user:CreateUserDto ) {
    const createdUser = await this.userRepository.createUser(user);
    return createdUser;
  }

}
