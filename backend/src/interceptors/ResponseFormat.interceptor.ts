import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseFormatInterceptor<T> implements NestInterceptor<T, { message: string; status: number; data: T }> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<{ message: string; status: number; data: T }> {
    return next.handle().pipe(
      map(data => ({
        message: '成功', // 適切なメッセージに変更してください
        status: context.switchToHttp().getResponse().statusCode,
        data,
      })),
    );
  }
}
