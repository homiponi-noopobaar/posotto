export function timeDifference(referenceTime: Date): {
  hours: number
  minutes: number
} {
  if (isNaN(referenceTime.getTime())) {
    return { hours: 0, minutes: 0 } // これでいいのかな
  }
  const currentTime = new Date()
  const timeDifferenceMilliseconds =
    currentTime.getTime() - referenceTime.getTime()
  const hours = Math.floor(timeDifferenceMilliseconds / 1000 / 60 / 60)
  const minutes = Math.floor(timeDifferenceMilliseconds / 1000 / 60) % 60

  return { hours, minutes }
}
