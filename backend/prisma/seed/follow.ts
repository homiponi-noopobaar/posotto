import { PrismaClient, Follow } from "@prisma/client"



const prisma = new PrismaClient()

export const follow = async () => {
 
  const follows:Follow[] = [
    {
      follower_id: 'user_2bZsg5vIrB06IKeLE7eYyecxop0',
      following_id:'user_2bZsg5vIrB06IKeLE7eYyecxoq1'
    },
    {
      follower_id: 'user_2bZsg5vIrB06IKeLE7eYyecxop0',
      following_id:'user_2bZsg5vIrB06IKeLE7eYyecxoq2'
    }
  ]
  await prisma.follow.createMany({
    data: follows.map((follow) => follow),
  })
}