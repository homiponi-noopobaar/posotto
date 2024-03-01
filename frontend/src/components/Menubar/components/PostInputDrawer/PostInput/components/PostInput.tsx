'use client'
import { Center, Progress, VStack } from '@yamada-ui/react'

import { Token } from '@/types/token'
import { useRecord } from '@/components/Menubar/components/PostInputDrawer/PostInput/hooks/useRecord'
import { DraftLayout } from './DraftLayout/components/DraftLayout'
import { usePost } from '../hooks/usePost'
import { RecordLayout } from './RecordLayout/components/RecordLayout'

type PostInputProps = {
  token: Token
}

export default function PostInput(props: PostInputProps) {
  const { token } = props
  const {
    audioBlob,
    isRecording,
    progress,
    handleStartRecording,
    handleStopRecording,
  } = useRecord()
  const { draftText, hasDraft, handlePostButtonClick } = usePost(
    audioBlob,
    token,
  )

  return (
    <VStack gap="1em">
      {hasDraft ? (
        <DraftLayout
          handlePostButtonClick={handlePostButtonClick}
          draftText={draftText}
        />
      ) : (
        <RecordLayout
          isRecording={isRecording}
          progress={progress}
          handleStartRecording={handleStartRecording}
          handleStopRecording={handleStopRecording}
        />
      )}
    </VStack>
  )
}
