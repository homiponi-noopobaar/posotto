import { DBUser} from '@/types/data/user'
import { UserInterface } from '@/types/interface/user.interface'
import { Token } from '@/types/token'

export class UserRepository implements UserInterface {
  private static instance: UserRepository

  public static getInstance(): UserRepository {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository()
    }
    return UserRepository.instance
  }

  async findByPublicId(id: string,token:Token): Promise<DBUser|null> {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,{
          method: 'GET',
          headers:{
            'Authorization': `Bearer ${token}`
          }
        }
      )
      const data = await response.json()
      return data
    } catch (err) {
      console.log(err)
      return null
    }
  }

//   async createUser(user: User): Promise<User> {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
//       method: 'POST',
//       body: JSON.stringify(user),
//     })
//     const data = await response.json()
//     return data
//   }
}
