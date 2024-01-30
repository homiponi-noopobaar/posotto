# Node.js 18.16.0をベースにする
FROM node:18.16.0

# NestJS CLIのインストール
RUN npm i -g @nestjs/cli

# 作業ディレクトリを設定
WORKDIR /api

# プロジェクトファイルをコピー
COPY . .

# 依存関係のインストール
RUN npm i

# Prismaの生成
RUN npx prisma migrate dev 
RUN npx prisma generate

# ビルドプロセス
RUN npm run build

# Pythonとpipをインストール
RUN apt-get update && apt-get install -y python3 python3-pip python3-venv

# Pythonの仮想環境を作成
RUN python3 -m venv /opt/venv

# 仮想環境をアクティベートしてパッケージをインストール
RUN . /opt/venv/bin/activate && pip install SpeechRecognition

# ポート8000を公開
EXPOSE 8000

# 本番環境でのアプリケーションの起動
CMD ["node", "dist/src/main"]
