import { Message } from '@/domain/messages'
import styles from './MessageBubble.module.scss'

interface MessageBubbleProps {
  message: Message
}
const MessageBubble = ({ message }: MessageBubbleProps) => {
  return (
    <div className={styles.block}>
      <span className={styles.text}>{message.text}</span>
    </div>
  )
}

export default MessageBubble
