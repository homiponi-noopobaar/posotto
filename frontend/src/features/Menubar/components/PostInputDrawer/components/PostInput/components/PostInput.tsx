'use client'
import { VStack } from '@yamada-ui/react'

import { Token } from '@/types/token'
import { useRecord } from '@/features/Menubar/components/PostInputDrawer/components/PostInput/hooks/useRecord'
import { DraftLayout } from './DraftLayout/components/DraftLayout'
import { usePost } from '../hooks/usePost'
import { RecordLayout } from './RecordLayout/components/RecordLayout'

type PostInputProps = {
  token: Token
}

export default function PostInput(props: PostInputProps) {
  const { token } = props
  const {
    // audioBlob,
    isRecording,
    progress,
    transcript,
    resetTranscript,
    handleStartRecording,
    handleStopRecording,
  } = useRecord()
  const { draftText, hasDraft, handlePostButtonClick,uploadAudioText } = usePost(
    // audioBlob,
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
          handleStopRecording={()=>handleStopRecording(uploadAudioText)}
          transcript={transcript}
        />
      )}
    </VStack>
  )
}
