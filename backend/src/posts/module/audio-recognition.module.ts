import { Module } from '@nestjs/common';
import { AudioRecognitionService } from '../services/audio-recognition.service';

@Module({
  providers: [AudioRecognitionService],
  exports: [AudioRecognitionService],
})
export class AudioRecognitionModule {}
