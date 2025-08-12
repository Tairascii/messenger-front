import Image from 'next/image'
import styles from './ProfileTab.module.scss'
import ExpandIcon from '@/icons/ExpandIcon'

const ProfileTab = () => {
  return (
    <div className={styles.block}>
      <div className={styles.profile}>
        <div className={styles.pfpWrapper}>
          <Image
            alt="pfp"
            width={32}
            height={32}
            quality={100}
            // todo
            src="https://scontent.fala3-2.fna.fbcdn.net/v/t1.6435-1/35628500_106727806900796_2933125967796764672_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=_98zKjnFUPUQ7kNvwEN6DrC&_nc_oc=Adl-KZKk3xUpK6jbyLS0mCbKjuxjd1LhcgWp8Ahnl49IdzkAZdcjvKk79KMW8E5rs_s&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fala3-2.fna&_nc_gid=GQzKVhxf4EyqG2uZ9o4XHw&oh=00_AfWZxG1eeUPMnvKC0U4KEaVC66h99BnReT-qLJRjDLHn4A&oe=68C2F533"
            className={styles.pfp}
          />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>Tair</span>
          <span className={styles.tag}>@tair.sairanbekov</span>
        </div>
      </div>
      <button className={styles.expand}>
        <ExpandIcon />
      </button>
    </div>
  )
}

export default ProfileTab
