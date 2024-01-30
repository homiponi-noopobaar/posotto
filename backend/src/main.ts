import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BigIntInterceptor } from './interceptors/BigInt.interceptor';

// サーバー全体の処理を記載
async function bootstrap() {
  const app = await NestFactory.create(AppModule); //nestを動かすための初期化
  app.enableCors(); //ポート番号のセキュリティ的な立ち回り、異なる通信のポート番号を殺す的な
  app.useGlobalInterceptors(new BigIntInterceptor()); //全ての通信中にbigint型の変換を実施
  await app.listen(8000); //サーバーをポート8000
}
bootstrap();
