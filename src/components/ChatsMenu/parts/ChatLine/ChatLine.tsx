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

    return 'https://scontent.fala3-2.fna.fbcdn.net/v/t1.6435-1/35628500_106727806900796_2933125967796764672_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=_98zKjnFUPUQ7kNvwEN6DrC&_nc_oc=Adl-KZKk3xUpK6jbyLS0mCbKjuxjd1LhcgWp8Ahnl49IdzkAZdcjvKk79KMW8E5rs_s&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fala3-2.fna&_nc_gid=GQzKVhxf4EyqG2uZ9o4XHw&oh=00_AfWZxG1eeUPMnvKC0U4KEaVC66h99BnReT-qLJRjDLHn4A&oe=68C2F533'
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
