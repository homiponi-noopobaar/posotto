// src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';
// Clerk SDKのインポート
import { clerkClient} from '@clerk/clerk-sdk-node';
import { User } from '@clerk/clerk-sdk-node';

@Injectable()
export class AuthService {

  async getUser(userId: string): Promise<User> {
    try {
      return await clerkClient.users.getUser(userId);
    } catch (error) {
      throw new Error('User authentication failed');
    }
  }
}
