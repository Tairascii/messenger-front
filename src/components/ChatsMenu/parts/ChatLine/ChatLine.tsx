'use client'

import Image from 'next/image'
import { useRouter, useParams } from 'next/navigation'
import { Chat } from '@/domain/chats'
import styles from './ChatLine.module.scss'
import clsx from 'clsx'
import { URLEnum } from '@/enums/url'

interface ChatLineProps {
  chat: Chat
}

const ChatLine = ({ chat }: ChatLineProps) => {
  const router = useRouter()
  const params = useParams()
  const chatID = params.slug?.at(0)

  const onChatSelect = () => {
    router.push(`${URLEnum.CHATS}/${chat.id}`, { scroll: false })
  }

  const isSelected = chatID === chat.id
  const hasLastMessage = !!chat.lastMessage
  const getLastMessageText = (): string => {
    if (hasLastMessage) {
      return `${chat.lastMessage?.text} · ${chat.lastMessage?.createdAt}`
    }
    return `no messages yet`
  }

  const getChatPicture = (): string => {
    if (chat.picture) {
      return chat.picture
    }

    return ''
  }

  return (
    <div
      className={clsx(styles.block, { [styles.selected]: isSelected })}
      role="button"
      onClick={onChatSelect}
      tabIndex={0}
    >
      <Image
        alt="friendpfp"
        src={getChatPicture()}
        quality={100}
        width={48}
        height={48}
        className={styles.friendpfp}
      />
      <div className={styles.info}>
        <span className={styles.userName}>{chat.title}</span>
        <span className={styles.lastMessageText}>{getLastMessageText()}</span>
      </div>
    </div>
  )
}

export default ChatLine
