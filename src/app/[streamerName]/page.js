'use client'
import { useParams } from 'next/navigation'

export default function StreamerName() {
  const { streamerName } = useParams()
  return <h1>{streamerName}</h1>
}
