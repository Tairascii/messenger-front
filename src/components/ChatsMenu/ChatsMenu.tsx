'use client'

import NewChatIcon from '@/icons/NewChatIcon'
import { Chat } from '@/domain/chats'
import styles from './ChatsMenu.module.scss'
import { ChatLine } from './parts/ChatLine'
import { getChats } from '@/api/chats/getChats'
import { useEffect, useState } from 'react'

const ChatsMenu = () => {
  const [chats, setChats] = useState<Chat[]>([])

  useEffect(() => {
    const get = async () => {
      const chats = await getChats()
      setChats(chats)
    }

    get()
  }, [])
  const mockChats: Chat[] = [
    {
      id: '1',
      picture: 'https://scontent.fala3-2.fna.fbcdn.net/v/t1.6435-1/35628500_106727806900796_2933125967796764672_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=_98zKjnFUPUQ7kNvwEN6DrC&_nc_oc=Adl-KZKk3xUpK6jbyLS0mCbKjuxjd1LhcgWp8Ahnl49IdzkAZdcjvKk79KMW8E5rs_s&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fala3-2.fna&_nc_gid=GQzKVhxf4EyqG2uZ9o4XHw&oh=00_AfWZxG1eeUPMnvKC0U4KEaVC66h99BnReT-qLJRjDLHn4A&oe=68C2F533',
      title: 'Tair',
      lastMessage: {
        text: 'some',
        createdAt: '19:03',
        senderID: '1',
      },
    },
  ]
  // todo
  const hasChats = true
  return (
    <div className={styles.block}>
      <div className={styles.menuHeader}>
        <h1 className={styles.title}>Chats</h1>
        <button className={styles.newChat}>
          <NewChatIcon />
        </button>
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          name="search"
          placeholder="Search in Messenger"
          className={styles.search}
        />
      </div>
      {hasChats ? (
        <div className={styles.chatsWrapper}>
          {mockChats.map((chat) => {
            return <ChatLine key={chat.id} chat={chat} />
          })}
        </div>
      ) : (
        <div className={styles.noChats}>
          <span className={styles.noChatsTitle}>No chats</span>
          <span className={styles.noChatsSubtitle}>
            Chats you are participating in will be displayed here.
          </span>
        </div>
      )}
    </div>
  )
}

export default ChatsMenu
