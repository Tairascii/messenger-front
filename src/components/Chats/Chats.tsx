'use client'

import { useParams } from 'next/navigation'
import clsx from 'clsx'
import styles from './Chats.module.scss'
import { Chat } from '../Chat/'

const Chats = () => {
  const params = useParams()
  const chatID = params.slug?.at(0)
  const mockChat = {
    userID: '1',
    userProfilePicture:
      'https://scontent.fala3-2.fna.fbcdn.net/v/t1.6435-1/35628500_106727806900796_2933125967796764672_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=_98zKjnFUPUQ7kNvwEN6DrC&_nc_oc=Adl-KZKk3xUpK6jbyLS0mCbKjuxjd1LhcgWp8Ahnl49IdzkAZdcjvKk79KMW8E5rs_s&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fala3-2.fna&_nc_gid=GQzKVhxf4EyqG2uZ9o4XHw&oh=00_AfWZxG1eeUPMnvKC0U4KEaVC66h99BnReT-qLJRjDLHn4A&oe=68C2F533',
    userName: 'Tair',
  }

  const isSelected = !!chatID
  return (
    <div
      className={clsx(styles.block, { [styles.notSelectedBlock]: !isSelected })}
    >
      {isSelected ? (
        <Chat
          userID={''}
          userProfilePicture={mockChat.userProfilePicture}
          userName={mockChat.userName}
          chatID={chatID}
        />
      ) : (
        <NotSelected />
      )}
    </div>
  )
}

const NotSelected = () => {
  return (
    <div className={styles.notSelected}>
      <div className={styles.notSelectedSprite} />
      <span className={styles.notSelectedText}>No chats selected</span>
    </div>
  )
}

export default Chats
