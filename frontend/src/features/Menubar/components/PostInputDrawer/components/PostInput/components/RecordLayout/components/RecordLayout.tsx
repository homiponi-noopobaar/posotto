import React from 'react'
import { NeumoIconButton } from '@/components/shared/elements/NeumoIconButton'
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

import { ICON_BOX_SHADOW_PRESSED } from '@/variants'
import { Progress, Center } from '@yamada-ui/react'
type Props = {
  isRecording: boolean
  progress: number
  transcript: string
  handleStartRecording: () => void
  handleStopRecording: () => void
}
export const RecordLayout = (props: Props) => {
  const {
    isRecording,
    progress,
    transcript,
    handleStartRecording,
    handleStopRecording,
  } = props
  return (
    <>
      {isRecording && (
        <Progress
          value={progress}
          filledTrackColor="gray.800"
          rounded="md"
          boxShadow={ICON_BOX_SHADOW_PRESSED}
          p="2px"
          pos="absolute"
          top="0.1em"
        />
      )}
      <Center>
        <p>{transcript}</p>
        <NeumoIconButton
          iconElem={<FontAwesomeIcon icon={faMicrophone} fontSize="2xl" />}
          handleClick={isRecording ? handleStopRecording : handleStartRecording}
          isPressed={isRecording}
          size="lg"
        />
      </Center>
    </>
  )
}
