import { PrismaClient, User } from "@prisma/client"



const prisma = new PrismaClient()

export const user = async () => {
 
  const users:User[] = [
    {
      // q:"please sample email",
      birthday: new Date(),
      created_at: new Date(),
      id: '1',
      // アクセスするたびに画像が変わるURL
      img_url: 'https://picsum.photos/200/300',
      isPublic: true,
      link: 'https://www.google.com/',
      comment:"sample comment",
      deleted_at: new Date(),
    },
  ]
  await prisma.user.createMany({
    data: users.map((user) => user),
  })
}