import { UserRepository } from '@/repositories/user.repository'
import { Post } from '@/types/data/post'
import { User } from '@/types/data/user'
import { Token } from '@/types/token'

export class UserService {
  constructor(private userRepository: UserRepository) {
    this.userRepository = UserRepository.getInstance()
  }
  async findByPublicId(id: string, token: Token): Promise<User | null> {
    try {
      // front で無理やり型を合わせているため、パフォーマンスが良くないかも
      const DBUser = await this.userRepository.findByPublicId(id, token)
      if (!DBUser) return null
      const user: User = {
        ...DBUser,
        posts: DBUser?.posts.map((post) => ({
          ...post,
          user: {
            id: DBUser.id,
            nickname: DBUser.nickname,
            img_url: DBUser.img_url,
            isPublic: DBUser.isPublic,
            publicId: id,
          },
        })),
      }
      return user
    } catch (err) {
      console.log(err)
      return null
    }
  }
}
