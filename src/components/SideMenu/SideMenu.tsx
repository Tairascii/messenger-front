import clsx from 'clsx'
import { MenuLinks } from './constants'
import { ProfileTab } from '../ProfileTab'
import styles from './SideMenu.module.scss'

const SideMenu = () => {
  return (
    <div className={styles.block}>
      <nav className={styles.menuLinks}>
        {MenuLinks.map((link) => {
          const isActive = link.id == 'chats'
          const iconColor = isActive ? '#000' : '#65676b'
          const Icon = link.icon
          return (
            <a
              href={link.href}
              className={clsx(styles.menuLink, { [styles.active]: isActive })}
              key={link.id}
            >
              <div className={styles.icon}>
                <Icon fill={iconColor} />
              </div>
              <span className={styles.title}>{link.title}</span>
            </a>
          )
        })}
      </nav>
      <ProfileTab />
    </div>
  )
}

export default SideMenu
