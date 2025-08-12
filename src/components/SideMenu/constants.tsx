import ArchivedIcon from '@/icons/ArchivedIcon'
import ChatIcon from '@/icons/ChatIcon'
import MarketplaceIcon from '@/icons/MarketplaceIcon'
import RequestsIcon from '@/icons/RequestsIcon'
import { IconProps } from '@/icons/types'
import { ComponentType, JSX, ReactNode, SVGProps } from 'react'

interface MenuLink {
  id: string
  href: string
  icon: ComponentType<IconProps>
  title: string
}

export const MenuLinks: MenuLink[] = [
  {
    id: 'chats',
    href: '#',
    icon: ChatIcon,
    title: 'Chats',
  },
  {
    id: 'marketplace',
    href: '#',
    icon: MarketplaceIcon,
    title: 'Marketplace',
  },
  {
    id: 'requests',
    href: '#',
    icon: RequestsIcon,
    title: 'Requests',
  },
  {
    id: 'archived',
    href: '#',
    icon: ArchivedIcon,
    title: 'Archived',
  },
]
