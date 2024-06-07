'use client'
import { useParams } from 'next/navigation'
import styles from './_streamerName.module.scss'
import data from '../../data/data.json'
import { useEffect } from 'react'

export default function StreamerName() {
  const { streamerName } = useParams()
  const allChannels = [...data.Followed_channels, ...data.Recommended_channels]
  const streamerInfo = allChannels.find(
    (streamer) => streamer.name === streamerName
  )
  useEffect(() => console.log(streamerInfo))
  return (
    <div>
      <div className={styles.main}>
        <h1>{streamerName}</h1>
        <div className={styles.video_div}>
          <h3>VIDEO KILLED THE RADIOSTAR</h3>
        </div>
        <h2>{streamerInfo.title}</h2>
        <div className={styles.description_div}>
          <p>joue acuellement à {streamerInfo.category}</p>
          <p>{streamerInfo.nbViewers}</p>
        </div>
      </div>
      <div className={styles.chat}></div>
    </div>
  )
}
