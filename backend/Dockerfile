FROM node:18.16.0

WORKDIR /usr/src/app

COPY package*.json ./

# pnpmのグローバルストアディレクトリを設定
RUN npm install -g pnpm && pnpm config set store-dir /usr/src/app/.pnpm-store --global

# 依存関係のインストール
RUN pnpm install --force

# @prisma/clientの追加
RUN pnpm add @prisma/client

COPY . .

RUN pnpm run build

# Prismaの生成
RUN npx prisma generate

EXPOSE 8000

CMD ["pnpm", "run", "start:prod"]
