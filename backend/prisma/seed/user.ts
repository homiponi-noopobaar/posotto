import { PrismaClient, User } from "@prisma/client"



const prisma = new PrismaClient()

export const user = async () => {
 
  const users:User[] = [
    {
      // user1
      birthday: new Date(),
      created_at: new Date(),
      id: 'user_2bZsg5vIrB06IKeLE7eYyecxop0',
      publicId: 'posotto_official',
      nickname: 'posotto',
      // アクセスするたびに画像が変わるURL
      img_url: 'https://picsum.photos/200/300',
      isPublic: true,
      link: 'https://www.google.com/',
      comment:"sample comment",
      deleted_at: null
    },
    {
      // user2
      birthday: new Date(),
      created_at: new Date(),
      id: 'user_2bZsg5vIrB06IKeLE7eYyecxoq1',
      publicId: 'posotto_official_1',
      nickname: 'posotto_1',
      // アクセスするたびに画像が変わるURL
      img_url: 'https://picsum.photos/200/300',
      isPublic: true,
      link: 'https://www.google.com/',
      comment:"sample comment",
      deleted_at: null
    },
    {
      // user3
      birthday: new Date(),
      created_at: new Date(),
      id: 'user_2bZsg5vIrB06IKeLE7eYyecxoq2',
      publicId: 'posotto_official_2',
      nickname: 'posotto_2',
      // アクセスするたびに画像が変わるURL
      img_url: 'https://picsum.photos/200/300',
      isPublic: true,
      link: 'https://www.google.com/',
      comment:"sample comment",
      deleted_at: null
    }
  ]
  await prisma.user.createMany({
    data: users.map((user) => user),
  })
}