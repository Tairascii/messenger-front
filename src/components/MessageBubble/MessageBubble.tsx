import { Message } from '@/domain/messages'
import styles from './MessageBubble.module.scss'
import clsx from 'clsx'

interface MessageBubbleProps {
  message: Message
}
const MessageBubble = ({ message }: MessageBubbleProps) => {
  return (
    <div className={clsx(styles.block, { [styles.mine]: message.isFromMe })}>
      <span className={styles.text}>{message.text}</span>
    </div>
  )
}

export default MessageBubble
