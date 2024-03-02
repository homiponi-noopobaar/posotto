import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';

import * as fs from 'fs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // console.log('--------token---------');
    const token = request.headers.authorization?.split(' ')[1];
    // console.log(token);
    const publicKey = fs.readFileSync('./publicKey.pem', 'utf8');

    try {
      if (token) {
        const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
        decoded.sub;
        // console.log('--------decoded---------');
        // console.log(decoded);
        request.user = { userId: decoded.sub };
        return true;
      } else {
        // console.log('no token');
        // セッショントークンの検証もここで行う
        return true;
      }
    } catch (error) {
      console.log(error);
      return true;
    }
  }
}
