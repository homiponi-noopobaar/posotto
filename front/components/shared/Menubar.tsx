'use client'
import {
  Avatar,
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  HStack,
  Progress,
  Spacer,
  Text,
  VStack,
  useDisclosure,
} from '@yamada-ui/react'
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { currentUser } from '@clerk/nextjs'
import { BG_COLOR, ICON_BOX_SHADOW_PRESSED } from '@/variants'
import { NeumoIconButton } from '../elements/NeumoIconButton'
import { useState, useRef } from 'react'
import { PostRepository } from '@/repositories/post.repository'
import { PostService } from './_services/post.service'
import { DBUser, User } from '@/types/data/user'

interface Props {
  user: {
    id: string
    name: string
    imageUrl: string
  }
}

export default function Menubar({ user }: Props) {
  // TODO: コンポーネント化する
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isRecording, setIsRecording] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>(null) // デバッグ用
  const recordingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [progress, setProgress] = useState(0) // 追加: 進捗率を追跡

  const startRecording = async () => {
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
        setProgress(0) // 開始時に進捗率を0にリセット

        recordingTimeoutRef.current = setInterval(() => {
          setProgress((prevProgress) => {
            if (prevProgress < 100) {
              return prevProgress + 2 // 10秒で100%に達するためには、0.1秒ごとに1%ずつ増やす
            }
            return prevProgress // 100%に達したら増やさない
          })
        }, 100) // 0.1秒ごとに更新

        // 5秒後に録音を停止
        setTimeout(() => {
          stopRecording()
        }, 5000)
      } catch (err) {
        console.error('Error accessing the microphone', err)
      }
    }
  }
  const PostRepo = new PostRepository()
  const PostSev = new PostService(PostRepo)

  const stopRecording = async () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      clearInterval(recordingTimeoutRef.current ?? undefined)
      recordingTimeoutRef.current = null
      setProgress(0)
      if (audioBlob) {
        try {
          const res = await PostSev.createPost({
            content: audioBlob,
            created_at: new Date(),
            isLiked: false,
            _count: { favorites: 0, comments: 0 },
          })
          console.log(res)
        } catch (err) {
          console.error(err)
        }
      }
    }
  }
  const handleButtonClick = () => {
    if (isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }

  return (
    <Center h="6em" w="full" pos="fixed" bottom="0">
      <NeumoIconButton
        iconElem={<FontAwesomeIcon icon={faMicrophone} fontSize="2xl" />}
        handleClick={onOpen}
        size="lg"
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="bottom"
        h="30em"
        bg={BG_COLOR} // ここで背景色を指定しないと、Drawerの背景色が透明になってしまう
      >
        <DrawerHeader>ぽそっと、つぶやく</DrawerHeader>
        <DrawerBody justifyContent="center">
          <Box
            minH="7em"
            mx="md"
            w={{ base: '90%', lg: '600px' }}
            p="sm"
            borderRadius="10px"
          >
            <HStack gap="0" mb="0.5em" alignItems="start">
              <Avatar src={user.imageUrl} />
              <VStack gap="3px" ps="md">
                <HStack gap="0" justify="space-between">
                  <VStack gap="0">
                    <Text fontWeight="bold">ユーザー</Text>
                  </VStack>
                  <Spacer />
                </HStack>
                <Box w={{ base: 'full', md: '600px' }} pe="md">
                  <Text wordBreak="keep-all" overflowWrap="anywhere">
                    入力内容。
                  </Text>
                </Box>
              </VStack>
            </HStack>
          </Box>
        </DrawerBody>
        <Spacer />
        <DrawerFooter justifyContent="center">
          <VStack gap="1em">
            {isRecording && (
              <Progress
                value={progress}
                filledTrackColor="gray.800"
                rounded="md"
                boxShadow={ICON_BOX_SHADOW_PRESSED}
                p="2px"
              />
            )}
            <Center>
              <NeumoIconButton
                iconElem={
                  <FontAwesomeIcon icon={faMicrophone} fontSize="2xl" />
                }
                handleClick={handleButtonClick}
                isPressed={isRecording}
                size="lg"
              />
              {audioUrl && (
                <div>
                  {/* デバッグ用
                  <audio controls src={audioUrl}>
                    Your browser does not support the audio element.
                  </audio> */}
                </div>
              )}
            </Center>
          </VStack>
        </DrawerFooter>
      </Drawer>
    </Center>
  )
}
