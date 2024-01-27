import { Controller, Get } from '@nestjs/common';

@Controller('sample')
export class SampleController {
  @Get()
  getSample() {
    return { message: 'This is a sample response!' };
  }
}
