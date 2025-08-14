import clsx from 'clsx'
import styles from './Chats.module.scss'

const Chats = () => {
  // todo
  const isSelected = false
  return (
    <div
      className={clsx(styles.block, { [styles.notSelectedBlock]: !isSelected })}
    >
      {isSelected ? <div>hi</div> : <NotSelected />}
    </div>
  )
}

const NotSelected = () => {
  return (
    <div className={styles.notSelected}>
      <div className={styles.notSelectedSprite} />
      <span className={styles.notSelectedText}>No chats selected</span>
    </div>
  )
}

export default Chats
