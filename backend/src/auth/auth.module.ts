import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Global()
@Module({
  providers: [AuthService]
})
export class AuthModule {}
