import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { writeFile, unlink } from 'fs/promises';
import { randomUUID } from 'crypto';
import { join } from 'path';

@Injectable()
export class AudioRecognitionService {
  async recognizeAudio(fileBuffer: Buffer): Promise<string> {
    // 一時ファイルのパスを生成
    const tempFilePath = join(__dirname, `${randomUUID()}.wav`);

    try {
      // バッファから一時ファイルを作成
      await writeFile(tempFilePath, fileBuffer);

      const pythonEnvPath = process.env.PYTHON_PATH||"python3";
      const scriptPath = process.env.SCRIPT_PATH;
      const command = `${pythonEnvPath} ${scriptPath} ${tempFilePath}`;

      // Pythonスクリプトを実行
      // const command = `python3 src/lib/speech_recognition/convert_toText.py ${tempFilePath}`;
      const stdout = await this.executeCommand(command);

      // 一時ファイルを削除
      await unlink(tempFilePath);

      return stdout.trim();
    } catch (error) {
      // エラー処理
      await unlink(tempFilePath);
      throw error;
    }
  }

  private executeCommand(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });
  }
}
