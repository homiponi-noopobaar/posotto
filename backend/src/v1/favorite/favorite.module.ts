import { Module } from '@nestjs/common';
import { FavoriteController } from './controllers/favorite.controller';
import { FavoriteService } from './services/favorite.service';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { FavoriteRepository } from './repositories/favorite.repository';

@Module({
  controllers: [FavoriteController],
  providers: [
    FavoriteRepository,
    FavoriteService,
    AuthService,
    PrismaService,
  ],
})
export class FavoriteModule {}
