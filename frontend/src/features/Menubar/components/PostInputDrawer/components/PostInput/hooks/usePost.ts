import { useState } from 'react'
import { PostService } from '@/features/Menubar/components/PostInputDrawer/components/PostInput/services/post.service'
import { useAuth } from '@clerk/nextjs'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Token } from '@/types/token'

export const usePost = (
  // audioBlob: Blob | null,
  token: Token,
) => {
  const [hasDraft, setHasDraft] = useState(false)
  const [draftText, setDraftText] = useState<string>()
  const { getToken } = useAuth()
  const queryClient = useQueryClient()
  const Post = PostService()

  const uploadAudioText = async (transcript: string) => {
    if (transcript) {
      try {
        const res = await Post.convertText(transcript, token)
        if (res) {
          console.log(res)
          setHasDraft(true)
          setDraftText(res.text)
          console.log('Draft text set')
          console.log(draftText)
        }
      } catch (err) {
        console.error(err)
      }
    }
  }

  const createPost = async (postData: string) => {
    const accessToken = await getToken()
    try {
      await Post.createPost(
        {
          content: postData,
          created_at: new Date(),
        },
        accessToken,
      )
      setHasDraft(false)
      setDraftText('')
    } catch (err) {
      console.error(err)
    }
  }
  const mutate = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  const handlePostButtonClick = async () => {
    console.log(draftText)
    console.log('Posting...')
    if (draftText) {
      mutate.mutate(draftText)
    }
  }

  return { hasDraft, draftText, uploadAudioText, handlePostButtonClick }
}
