'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { URLEnum } from '@/enums/url'
import styles from './Body.module.scss'

const Body = () => {
  const router = useRouter()
  const onLogInClick = () => {
    router.push(URLEnum.HOME)
  }

  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <div className={styles.message}>
          <h3 className={styles.title}>Go big with Messenger</h3>
          <p className={styles.subtitle}>
            A simple app that lets you text, video call, and stay close to
            people you care about. For Mac and PC.
          </p>
          <div className={styles.buttons}>
            <button className={styles.downloadButton}>
              <p className={styles.downloadButtonText}>Download for macOS</p>
            </button>
            <button className={styles.loginButton} onClick={onLogInClick}>
              <p className={styles.loginButtonText}>Log in</p>
            </button>
          </div>
          <p className={styles.caption}>
            You need to be on macOS 12 (Monterey) or higher to use the desktop
            app.
          </p>
        </div>
        <Image
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yu/r/kD2KcEc40mb.png"
          alt="notebook"
          width={717}
          height={400}
        />
      </div>
    </div>
  )
}

export default Body
