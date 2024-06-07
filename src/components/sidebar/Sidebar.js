'use client'
import styles from './_sidebar.module.scss'
import SidebarCard from '../sidebarCard/SidebarCard'
import data from '../../data/data.json'
import { useState } from 'react'

export default function Sidebar() {
  const [arrayFollowedChannels, setArrayFollowedChannels] = useState(
    data.Followed_channels.map((streamer) => ({
      name: streamer.name,
      category: streamer.category,
      viewerCount: streamer.nbViewers,
    }))
  )
  const [arrayRecommendedChannels, setArrayRecommendedChannels] = useState(
    data.Recommended_channels.map((streamer) => ({
      name: streamer.name,
      category: streamer.category,
      viewerCount: streamer.nbViewers,
    }))
  )

  return (
    <div className={styles.sidebar}>
      <h2>Followed channels</h2>
      <ul>
        {arrayFollowedChannels.map(({ name, category, viewerCount }) => (
          <li key={name}>
            <SidebarCard
              title={name}
              category={category}
              viewerCount={viewerCount}
            />
          </li>
        ))}
      </ul>
      <h2>Recommended channels</h2>
      <ul>
        {arrayRecommendedChannels.map(({ name, category, viewerCount }) => (
          <li key={name}>
            <SidebarCard
              title={name}
              category={category}
              viewerCount={viewerCount}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
