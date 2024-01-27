'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const test = async () => {
      try {
        await fetch('http://localhost:8000/sample')
          .then((res) => res.json())
          .then((res) => console.log(res))
      } catch (e) {
        console.log(e)
      }
    }
    test()
  }, [])
  return <>aaa</>
}
