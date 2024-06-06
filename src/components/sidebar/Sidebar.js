import styles from './_sidebar.module.scss'
import SidebarCard from '../sidebarCard/SidebarCard'
import data from '../../data/data.json'

export default function Sidebar() {
  const followedChannels = data.Followed_channels
  console.log(followedChannels)
  return (
    <div className={styles.sidebar}>
      <h2>{followedChannels}</h2>
      <ul>
        {followedChannels.map((index, streamer) => (
          <li key={streamer.name}>
            <SidebarCard
              index={index}
              title={streamer.name}
              viewerCount={streamer.nbViewers}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
