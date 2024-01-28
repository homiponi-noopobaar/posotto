FROM node:18.16.0

# NestJS CLIのインストール
RUN npm i -g @nestjs/cli

WORKDIR /api

# プロジェクトファイルのコピー
COPY . .

# 依存関係のインストール
RUN npm i

# Prismaの生成
RUN npx prisma generate

# ビルドプロセス
RUN npm run build

EXPOSE 8000

# 本番環境でのアプリケーションの起動
CMD ["node", "dist/src/main"]
