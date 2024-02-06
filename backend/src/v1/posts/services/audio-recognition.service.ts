import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { writeFile, unlink } from 'fs/promises';
import { randomUUID } from 'crypto';
import { join } from 'path';

@Injectable()
export class AudioRecognitionService {
  async recognizeAudio(fileBuffer: Buffer): Promise<string> {
    // 一時ファイルのパスを生成
    const tempFilePath = join(__dirname, `${randomUUID()}`);
    const wavFilePath = `${tempFilePath}.wav`;

    try {
      // バッファから一時ファイルを作成（WAV形式にする前の一時ファイル）
      await writeFile(tempFilePath, fileBuffer);

      // ffmpegを使用してWAV形式に変換
      await this.convertToWav(tempFilePath, wavFilePath);

      const pythonEnvPath = process.env.PYTHON_PATH || "python3";
      const scriptPath = process.env.SCRIPT_PATH2;
      const command = `${pythonEnvPath} ${scriptPath} ${wavFilePath}`;

      // Pythonスクリプトを実行
      const stdout = await this.executeCommand(command);

      // 一時ファイルを削除
      await unlink(tempFilePath);
      await unlink(wavFilePath);

      return stdout.trim();
    } catch (error) {
      // エラー処理
      await unlink(tempFilePath).catch(() => null);
      await unlink(wavFilePath).catch(() => null);
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

  private convertToWav(inputFilePath: string, outputFilePath: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const command = `ffmpeg -i ${inputFilePath} -acodec pcm_s16le -ar 44100 ${outputFilePath}`;
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }
}
