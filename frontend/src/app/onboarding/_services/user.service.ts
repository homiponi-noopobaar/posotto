import { UserInit } from '@/types/data/user'
import { UserRepository } from '@/repositories/user.repository'
import { Token } from '@/types/token'

export class UserService {
  constructor(private userRepository: UserRepository) {
    this.userRepository = UserRepository.getInstance()
  }
  async createUser(user: UserInit, token: Token) {
    try {
      return await this.userRepository.createUser(user, token)
    } catch (err) {
      console.log('error')
      console.log(err)
    }
  }
}
