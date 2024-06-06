import styles from './_sidecardbar.module.scss'

export default function SidebarCard({ index, title, viewerCount }) {
  return (
    <a className={styles.sidebar_card}>
      <div>
        <div>
          <p>{index}</p>
          <h3>{title}</h3>
        </div>
        <p>{viewerCount}</p>
      </div>
    </a>
  )
}
