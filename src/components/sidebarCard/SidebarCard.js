import styles from './_sidecardbar.module.scss'

export default function SidebarCard({ title, category, viewerCount }) {
  return (
    <a className={styles.sidebar_card}>
      <div>
        <div>
          <h3>{title}</h3>
          <p>{category}</p>
        </div>
        <p>{viewerCount}</p>
      </div>
    </a>
  )
}
