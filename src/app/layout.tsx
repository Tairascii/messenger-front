import { UserStoreProvider } from '@/stores/user/Provider'
import '../styles/globals.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <UserStoreProvider>{children}</UserStoreProvider>
      </body>
    </html>
  )
}
