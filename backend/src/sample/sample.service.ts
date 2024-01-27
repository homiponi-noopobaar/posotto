import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleService {
  test = () => {
   { message: 'This is a sample response!'}
  };
}
