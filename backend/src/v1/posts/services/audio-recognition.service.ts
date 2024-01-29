// src/posts/services/audio-recognition.service.ts

import { exec } from 'child_process';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AudioRecognitionService {
  recognizeAudio(filePath: string): Promise<string> {
    const command = `python3 ../../../../../../../speech_recognition/convert_toText.py ${filePath}`;

    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout.trim());
      });
    });
  }
}
