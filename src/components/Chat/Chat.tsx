'use client'
import Image from 'next/image'
import styles from './Chat.module.scss'
import MoreIcon from '@/icons/MoreIcon'
import { useState } from 'react'
import { Message } from '@/domain/messages'
import { MessageBubble } from '../MessageBubble'

interface ChatProps {
  userID: string
  userProfilePicture: string
  userName: string
  chatID: string
}

const Chat = ({ userID, userProfilePicture, userName }: ChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'hi',
      isEdited: false,
      createdAt: '19:03',
      senderID: '1',
      isFromMe: true,
    },
    {
      id: 2,
      text: 'hi',
      isEdited: false,
      createdAt: '19:03',
      senderID: '1',
      isFromMe: false,
    },
  ])
  const [message, setMessage] = useState('')
  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <div className={styles.user}>
          <Image
            src={userProfilePicture}
            width={36}
            height={36}
            quality={100}
            alt="pfp"
            className={styles.userPic}
          />
          <span className={styles.userName}>{userName}</span>
        </div>
        <button className={styles.moreButton}>
          <MoreIcon />
        </button>
      </div>
      <div className={styles.messages}>
        {messages.map((msg) => {
          return <MessageBubble key={msg.id} message={msg} />
        })}
      </div>
      <div className={styles.actions}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.textarea}
          placeholder="Aa"
        />
      </div>
    </div>
  )
}

export default Chat
