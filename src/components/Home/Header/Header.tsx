import Image from 'next/image'
import styles from './Header.module.scss'
import Link from 'next/link'
import { URLEnum } from '@/enums/url'

const Header = () => {
  return (
    <header className={styles.block}>
      <div className={styles.wrapper}>
        <Link href={URLEnum.HOME}>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={40}
            height={40}
            quality={100}
            className={styles.logo}
          />
        </Link>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>
            <p className={styles.navLinkText}>Privacy and Safety</p>
          </a>
          <a href="#" className={styles.navLink}>
            <p className={styles.navLinkText}>Desktop App</p>
          </a>
          <a href="#" className={styles.navLink}>
            <p className={styles.navLinkText}>For Developers</p>
          </a>
          <a href="#" className={styles.navLink}>
            <p className={styles.navLinkText}>Help center</p>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
