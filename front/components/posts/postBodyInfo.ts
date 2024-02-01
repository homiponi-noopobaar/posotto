import { Post } from '@/types/data/post'
import { timeDifference } from '@/utils/timeHelpers'

export const postBodyInfo = (
  post: Post,
): { contentOpacity: number; timeSinceText: string } => {
  const createdAt = new Date(post.created_at) // JSONから取得したデータは一度string型になるため
  const { hours, minutes } = timeDifference(createdAt)

  const contentOpacity = calcContentOpacity(hours)
  const timeSinceText = getTimeSinceText(hours, minutes)

  return { contentOpacity, timeSinceText }
}

const calcContentOpacity = (hours: number): number => {
  return 1.0 - hours / 24
}

const getTimeSinceText = (hours: number, minutes: number): string => {
  if (hours > 0) {
    return `${hours} hours ago`
  }
  return `${minutes} miniutes ago`
}
