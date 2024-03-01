'use client'
import {
  Box,
  Center,
  HStack,
  Progress,
  Stack,
  Text,
  VStack,
} from '@yamada-ui/react'
import { useRef, useState } from 'react'
import { NeumoIconButton } from '../elements/NeumoIconButton'
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { PostRepository } from '@/repositories/post.repository'
import { PostService } from './_services/post.service'
import { ICON_BOX_SHADOW_PRESSED } from '@/variants'
import { Token } from '@/types/token'
import { useEffect } from 'react'
import { NeumoButton } from '../elements/NeumoButton'
import { useAuth } from "@clerk/nextjs";

type PostInputProps = {
  token: Token
}

export default function PostInput(props: PostInputProps) {
  const { token } = props
  const [isRecording, setIsRecording] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const recordingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [progress, setProgress] = useState(0)
  const PostRepo = new PostRepository()
  const PostSev = new PostService(PostRepo)
  const [hasDraft, setHasDraft] = useState(true)
  const [draftText, setDraftText] = useState<string>('こんにちは！')
  const { getToken  } = useAuth();
  
  const startRecording = async () => {
    console.log('Recording started')
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        })
        mediaRecorderRef.current = new MediaRecorder(stream)
        const audioChunks: BlobPart[] = []

        mediaRecorderRef.current.ondataavailable = (e) => {
          audioChunks.push(e.data)
        }

        mediaRecorderRef.current.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' })
          setAudioBlob(audioBlob)
        }

        mediaRecorderRef.current.start()
        setIsRecording(true)
        setProgress(0)
        setTimeout(() => {
          if (isRecording) {
            stopRecording()
          }
        }, 5000)

        recordingTimeoutRef.current = setInterval(() => {
          setProgress((prevProgress) => {
            if (prevProgress < 100) {
              return prevProgress + 2
            }
            return prevProgress
          })
        }, 100)
      } catch (err) {
        console.error('Error accessing the microphone', err)
      }
    }
  }
  const stopRecording = async () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      clearInterval(recordingTimeoutRef.current ?? undefined)
      recordingTimeoutRef.current = null
      setProgress(0)
      console.log('Recording stopped')
    }
  }

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

  const handleButtonClick = () => {
    if (isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }
  const handlePostButtonClick = async () => {
    console.log(draftText)
    console.log('Posting...')
    const accessToken = await getToken()

    if (draftText) {
      try {
        await PostSev.createPost(
          {
            content: draftText,
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
  }

  return (
    <VStack gap="1em">
      {hasDraft ? (
        <HStack my="md" mx="lg" justify="space-between">
          <Box>
            <Text>{draftText}</Text>
          </Box>
          <NeumoButton
            handleClick={handlePostButtonClick}
            w="6em"
            fontWeight="md"
            isDark
          >
            ぽそっ
          </NeumoButton>
        </HStack>
      ) : isRecording ? (
        <>
          <Progress
            value={progress}
            filledTrackColor="gray.800"
            rounded="md"
            boxShadow={ICON_BOX_SHADOW_PRESSED}
            p="2px"
            pos="absolute"
            top="0.1em"
          />
          <Center>
            <NeumoIconButton
              iconElem={<FontAwesomeIcon icon={faMicrophone} fontSize="2xl" />}
              handleClick={handleButtonClick}
              isPressed
              size="lg"
            />
          </Center>
        </>
      ) : (
        <Center>
          <NeumoIconButton
            iconElem={<FontAwesomeIcon icon={faMicrophone} fontSize="2xl" />}
            handleClick={handleButtonClick}
            size="lg"
          />
        </Center>
      )}
    </VStack>
  )
}
