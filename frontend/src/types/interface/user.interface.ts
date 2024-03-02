import { DBUser, User } from '../data/user'
import { Token } from '../token'

export interface UserInterface {
  findByPublicId: (id: string,token:Token) => Promise<DBUser | null>
//   createUser: (user: User) => Promise<User>
}
