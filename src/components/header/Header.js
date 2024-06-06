import styles from './_header.module.scss'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href='/'>Accueil</Link>
          </li>
          <li>
            <Link href='champion'>Champions</Link>
          </li>
          <li>
            <Link href='tierlist'>Tier list</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
