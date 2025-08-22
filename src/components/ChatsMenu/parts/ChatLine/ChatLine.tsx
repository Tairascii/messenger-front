'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Chat } from '@/domain/chats'
import styles from './ChatLine.module.scss'
import clsx from 'clsx'
import { URLEnum } from '@/enums/url'

interface ChatLineProps {
  chat: Chat
}

const ChatLine = ({ chat }: ChatLineProps) => {
  const router = useRouter()
  const onChatSelect = () => {
    router.push(`${URLEnum.CHATS}/${chat.id}`, { scroll: false })
  }
  // todo
  const isSelected = true
  return (
    <div
      className={clsx(styles.block, { [styles.selected]: isSelected })}
      role="button"
      onClick={onChatSelect}
      tabIndex={0}
    >
      <Image
        alt="friendpfp"
        src={chat.user.profilePicture}
        quality={100}
        width={48}
        height={48}
        className={styles.friendpfp}
      />
      <div className={styles.info}>
        <span className={styles.userName}>{chat.user.name}</span>
        <span className={styles.lastMessageText}>
          {chat.lastMessage.text} · {chat.lastMessage.createdAt}
        </span>
      </div>
    </div>
  )
}

export default ChatLine
