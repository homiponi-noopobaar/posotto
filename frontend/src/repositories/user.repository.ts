import { DBUser, UserInit } from '@/types/data/user'
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

  async findByPublicId(id: string, token: Token): Promise<DBUser | null> {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      const data = await response.json()
      return data
    } catch (err) {
      console.log(err)
      return null
    }
  }

  async createUser(user: UserInit, token: Token): Promise<DBUser | null> {
    try {
      console.log(user)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      if (!data) {
        throw new Error('Failed to create user')
      }
      const {
        id,
        img_url,
        isPublic,
        link,
        birthday,
        comment,
        posts,
        nickname,
      } = data
      const dbUser: DBUser = {
        id,
        img_url,
        isPublic,
        link,
        birthday,
        comment,
        posts,
        nickname,
      }
      return dbUser
    } catch (err) {
      console.log(err)
      return null
    }
  }
}
