import { Module } from '@nestjs/common';
import { FavoriteController } from './controllers/favorite.controller';
import { FavoriteService } from './services/favorite.service';
import { PrismaService } from 'prisma/prisma.service';
import { FavoriteRepository } from './repositories/favorite.repository';

@Module({
  controllers: [FavoriteController],
  providers: [FavoriteRepository, FavoriteService,  PrismaService],
})
export class FavoriteModule {}
