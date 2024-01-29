import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = request.headers['user-id']; // 例: リクエストヘッダーからユーザーIDを取得
    return this.validateRequest(userId);
  }

  private async validateRequest(userId: string): Promise<boolean> {
    const user = await this.authService.getUser(userId);
    return !!user;
  }
}
