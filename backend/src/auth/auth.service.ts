// src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';
// Clerk SDKのインポート
import Clerk from '@clerk/clerk-sdk-node/esm/instance';
import { User } from '@clerk/clerk-sdk-node';

@Injectable()
export class AuthService {
  private readonly clerkClient = Clerk({ secretKey: process.env.CLERK_API_KEY });

  async getUser(userId: string): Promise<User> {
    try {
      return await this.clerkClient.users.getUser(userId);
    } catch (error) {
      throw new Error('User authentication failed');
    }
  }

  async getCrrentUserId(){
    return 'user_2bZsg5vIrB06IKeLE7eYyecxop0'
  }
}
