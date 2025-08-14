import { SideMenu } from '@/components/SideMenu'
import { Metadata } from 'next'
import { Chats } from '@/components/Chats'
import styles from './layout.module.scss'

export const metadata: Metadata = {
  title: 'Messenger',
  description: 'Created by tair sairanbekov',
}

export default function ChatsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={styles.chats}>
      <SideMenu />
      {children}
      <Chats />
    </div>
  )
}
