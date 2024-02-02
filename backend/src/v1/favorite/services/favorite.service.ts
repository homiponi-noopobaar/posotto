import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { FavoriteRepository } from '../repositories/favorite.repository';

@Injectable()
export class FavoriteService {
  constructor(
    private favoriteRepository: FavoriteRepository,
    private authService: AuthService,
  ) {}

  async changeFavorite(user_id: string, post_id: bigint) {
      const newFavoriteData = {user_id: user_id, post_id: post_id}
      //既に同じuser_idとpost_idの組み合わせがあるか確認
      const favorite = await this.favoriteRepository.findFavoriteByUserIdAndPostId(user_id, post_id);
      if (favorite) {
        //await this.favoriteRepository.deleteFavorite(favorite.id);
        //return favorite;
      }else{
        const newPost = await this.favoriteRepository.createFavorite(newFavoriteData);
        return newPost;
      }
  }
}
