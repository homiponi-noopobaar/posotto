import { DBUser, User } from '../data/user'

export interface UserInterface {
  findByPublicId: (id: string) => Promise<DBUser | null>
//   createUser: (user: User) => Promise<User>
}
