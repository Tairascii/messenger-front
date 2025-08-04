import Image from 'next/image'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.block}>
      <div className={styles.wrapper}>
        <div className={styles.tm}>© Meta 2025</div>
        <div className={styles.optionsWrapper}>
          <div className={styles.options}>
            <a href="#" className={styles.link}>
              Privacy Policy
            </a>
            <a href="#" className={styles.link}>
              Cookie Policy
            </a>
            <a href="#" className={styles.link}>
              Terms
            </a>
          </div>
          <div className={styles.logo}>
            <Image
              src="https://scontent.fala3-2.fna.fbcdn.net/v/t39.8562-6/474824981_899577288719610_6588160745649017665_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=srbYRU6VrNMQ7kNvwGD5ZFy&_nc_oc=Adnofxa5txRTxA9CbzXNqCiV9b_0-arkqIoprAonrXjFVHnGbe0CUe9IjUXFczkgn0g&_nc_zt=14&_nc_ht=scontent.fala3-2.fna&_nc_gid=fL28V1fKcsrAa3U90P6Mfg&oh=00_AfXLH8MA2d4uedoXyA-e7R0TvxDnRBxe0DvbSIa3YO0saw&oe=6896D69F"
              width={150}
              height={47}
              quality={100}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
