import { useRef, useState } from 'react'

export const useRecord = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [progress, setProgress] = useState(0) // progress bar
  const mediaRecorderRef = useRef<MediaRecorder | null>(null) // reference to the media recorder
  const recordingTimeoutRef = useRef<NodeJS.Timeout | null>(null) //q reference to the recording timeout

  const handleStartRecording = async () => {
    console.log('Recording started')
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        })
        const clone = stream.clone()
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
            setIsRecording(false)
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

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
        mediaRecorderRef.current.stop()
        setIsRecording(false)
        clearInterval(recordingTimeoutRef.current ?? undefined)
        recordingTimeoutRef.current = null
        setProgress(0)
        console.log('Recording stopped')
      }
    
  }

  return {
    isRecording,
    audioBlob,
    progress,
    mediaRecorderRef,
    recordingTimeoutRef,
    handleStartRecording,
    handleStopRecording,
  }
}
