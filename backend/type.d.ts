// types.d.ts または任意の .d.ts ファイルにこの内容を追加
import { Request } from 'express';

declare module 'express' {
  export interface Request {
    user?: { jwt: string }; // user プロパティをオプショナルで追加
  }
}
