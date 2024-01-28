import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { clerkClient } from '@clerk/clerk-sdk-node';


@Module({
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
