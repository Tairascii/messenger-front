import type { Metadata } from 'next'
import { Header } from '@/components/Home/Header'
import { Footer } from '@/components/Home/Footer'
import styles from './layout.module.scss'

export const metadata: Metadata = {
  title: 'Messenger',
  description: 'Created by tair sairanbekov',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={styles.home}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
