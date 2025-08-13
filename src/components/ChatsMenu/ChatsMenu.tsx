import NewChatIcon from '@/icons/NewChatIcon'
import styles from './ChatsMenu.module.scss'

const ChatsMenu = () => {
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
      <div className={styles.noChats}>
        <span className={styles.noChatsTitle}>No chats</span>
        <span className={styles.noChatsSubtitle}>
          Chats you are participating in will be displayed here.
        </span>
      </div>
    </div>
  )
}

export default ChatsMenu
