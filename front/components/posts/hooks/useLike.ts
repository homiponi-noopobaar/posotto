'use client'
import { useState } from 'react'

export const useLike = () => {
  const [isLiked, setIsLiked] = useState(false)
  const handleSetIsLiked = () => {
    setIsLiked(!isLiked)
  }
  const handleClickLike = (postId: number) => {
    handleSetIsLiked()
    // api通信の関数
  }
  return { isLiked, handleClickLike }
}
