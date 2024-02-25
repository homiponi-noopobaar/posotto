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
    console.log('-----------------');
    console.log(request);
    const token = request.headers.authorization?.split(' ')[1];
    const publicKey = fs.readFileSync('./publicKey.pem', 'utf8');

    try {
      if (token) {
        const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
        decoded.sub;
        request.user_id = decoded.sub;
        return true;
      } else {
        // セッショントークンの検証もここで行う
        return true;
      }
    } catch (error) {
      return true;
    }
  }
}
