'use client'
import Image from 'next/image'
import styles from './Chat.module.scss'
import MoreIcon from '@/icons/MoreIcon'
import { useEffect, useRef, useState } from 'react'
import { Message } from '@/domain/messages'
import { MessageBubble } from '../MessageBubble'
import { connectToChat } from '@/api/chats/connectToChat'
import { useUserStore } from '@/stores/user/useUserStore'

interface ChatProps {
  userID: string
  userProfilePicture: string
  userName: string
  chatID: string
}

const Chat = ({ userID, userProfilePicture, userName, chatID }: ChatProps) => {
  const { profile } = useUserStore((state) => state)
  const connRef = useRef<WebSocket | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const conn = connectToChat(chatID)
    connRef.current = conn

    conn.onopen = (ev) => {
      console.log('connected')
    }

    conn.onmessage = (ev) => {
      const msg = JSON.parse(ev.data)
      setMessages((prev) => [
        ...prev,
        {
          id: msg.id,
          text: msg.text,
          isEdited: msg.isEdited,
          createdAt: msg.createdAt,
          senderID: msg.senderID,
          isFromMe: msg.senderID === profile.id,
        },
      ])
    }

    conn.onclose = (ev) => {
      console.log('closed')
    }

    return () => conn.close()
  }, [])

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      connRef.current?.send(`{ "text": "${message}" }`)
      e.preventDefault()
      setMessage('')
    }
  }

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
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  )
}

export default Chat
