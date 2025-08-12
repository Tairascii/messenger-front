import { SideMenu } from '@/components/SideMenu'
import styles from './layout.module.scss'

export default function ChatsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={styles.chats}>
      <SideMenu />
      {children}
    </div>
  )
}
