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

  const hasChats = !!chats.length
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
          {chats.map((chat) => {
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
