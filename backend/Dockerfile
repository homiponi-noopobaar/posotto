FROM node:18.16.0
# コンテナ内の作業ディレクトリを指定
WORKDIR /usr/src/app
# ホストマシンのpackage.jsonをコンテナ内の作業ディレクトリにコピー
COPY package*.json pnpm-lock.yaml ./

# pnpmをインストールして依存関係をインストール
RUN npm install -g pnpm && pnpm install
# ホストマシンのソースコードをコンテナ内の作業ディレクトリにコピー
COPY . .

# アプリケーションのビルドを実行
RUN pnpm run build

# アプリケーションの起動
EXPOSE 8000
# コンテナのポート3000をホストマシンのポート3000にマッピング
CMD ["pnpm", "run", "start:prod"]