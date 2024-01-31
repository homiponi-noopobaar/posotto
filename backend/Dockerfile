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
RUN npx prisma generate

# ビルドプロセス
RUN npm run build

# Python、pip、およびFLACをインストール
RUN apt-get update && apt-get install -y python3 python3-pip python3-venv flac

# Pythonの仮想環境を作成し、その中で必要なパッケージをインストール
RUN python3 -m venv /opt/venv

# 仮想環境を有効化し、必要なパッケージをインストール 
COPY requirements.txt /opt/venv/
RUN . /opt/venv/bin/activate && pip install -r /opt/venv/requirements.txt

ENV PYTHON_PATH=/opt/venv/bin/python3
ENV SCRIPT_PATH=/api/src/lib/speech_recognition/convert_toText.py

# ポート8000を公開
EXPOSE 8000

# 本番環境でのアプリケーションの起動
CMD ["node", "dist/src/main"]
