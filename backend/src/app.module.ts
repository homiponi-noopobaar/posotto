import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleController } from './sample/sample.controller';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [SampleModule],
  controllers: [AppController,SampleController],
  providers: [AppService],
})
export class AppModule {}
