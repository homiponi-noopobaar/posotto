import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { FollowRepository } from '../repositories/follow.repository';

@Injectable()
export class FollowService {
  constructor(
    private followRepository: FollowRepository,
    private authService: AuthService,
  ) {}

  async createFollow(follower_id: string, following_id: string) {
      const newFollowData = {follower_id: follower_id, following_id: following_id}
      const newPost = await this.followRepository.createFollow(newFollowData);
      return newPost;
  }
}
