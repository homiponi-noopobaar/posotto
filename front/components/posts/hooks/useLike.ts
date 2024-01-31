'use client'
import { useState } from 'react'

export const useLike = () => {
  const [isLiked, setIsLiked] = useState(false)
  const handleSetIsLiked = () => {
    setIsLiked(!isLiked)
  }
  const handleClickLike = (id: number) => {
    handleSetIsLiked()
    // api通信の関数
  }
  return { isLiked, handleClickLike }
}
