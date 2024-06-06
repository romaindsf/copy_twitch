import Header from '@/components/header/Header'
import '../styles/_globals.scss'
import Sidebar from '@/components/sidebar/Sidebar'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <Sidebar />
        <div className='main_content'>{children}</div>
      </body>
    </html>
  )
}
