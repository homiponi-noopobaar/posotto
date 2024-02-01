import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BigIntInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map(data => this.transformBigInt(data)));
  }

  transformBigInt(data: any): any {
    if (data === null || data === undefined) return data;
    if (typeof data === 'bigint') {
      // BigIntをNumberに変換。安全範囲のチェックを追加することを検討してください。
      return Number(data);
    }
    if (data instanceof Date) return data.toISOString();  // Date オブジェクトの処理を追加
    if (Array.isArray(data)) return data.map(item => this.transformBigInt(item));
    if (typeof data === 'object') {
      return Object.fromEntries(Object.entries(data).map(([key, value]) => [key, this.transformBigInt(value)]));
    }
    return data;
  }
}
