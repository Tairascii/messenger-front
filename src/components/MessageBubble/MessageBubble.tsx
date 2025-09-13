import { Message } from '@/domain/messages'
import styles from './MessageBubble.module.scss'
import clsx from 'clsx'

interface MessageBubbleProps {
  message: Message
  userID: string
}
const MessageBubble = ({ message, userID }: MessageBubbleProps) => {
  if (!userID) return

  return (
    <div
      className={clsx(styles.block, {
        [styles.mine]: message.senderID === userID,
      })}
    >
      <span className={styles.text}>{message.text}</span>
    </div>
  )
}

export default MessageBubble
