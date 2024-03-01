import { useEffect } from 'react'
import { useState } from 'react'
import { PostRepository } from '@/repositories/post.repository'
import { PostService } from '@/components/Menubar/components/PostInputDrawer/PostInput/services/post.service'
import { useAuth } from '@clerk/nextjs'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Token } from '@/types/token'

export const usePost = (audioBlob: Blob | null,token:Token) => {
  const PostRepo = new PostRepository()
  const PostSev = new PostService(PostRepo)
  const [hasDraft, setHasDraft] = useState(false)
  const [draftText, setDraftText] = useState<string>()
  const { getToken } = useAuth()
  const queryClient = useQueryClient()

  useEffect(() => {
    const uploadAudio = async () => {
      if (audioBlob) {
        console.log(audioBlob)
        try {
          const res = await PostSev.convertVoiceToText(audioBlob, token)
          if (res) {
            console.log(res)
            setHasDraft(true)
            setDraftText(res)
            console.log('Draft text set')
            console.log(draftText)
          }
        } catch (err) {
          console.error(err)
        }
      }
    }
    uploadAudio()
  }, [audioBlob])

  
  const createPost = async (postData: string) => {
    const accessToken = await getToken()
    try {
      await PostSev.createPost(
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

  return { hasDraft, draftText,handlePostButtonClick }
}
