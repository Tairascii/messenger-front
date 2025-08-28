'use client'

import { createContext, ReactNode, useContext, useEffect, useRef } from 'react'
import { createUserStore, UserState } from './store'
import { useStore } from 'zustand'

interface UserStoreProvider {
  children: ReactNode
}

export type UserStoreApi = ReturnType<typeof createUserStore>

export const UserStoreContext = createContext<UserStoreApi | undefined>(
  undefined
)

export const UserStoreProvider = ({ children }: UserStoreProvider) => {
  const storeRef = useRef<UserStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createUserStore()
  }

  useEffect(() => {
    storeRef.current?.getState().getProfile()
  }, [])

  return (
    <UserStoreContext.Provider value={storeRef.current}>
      {children}
    </UserStoreContext.Provider>
  )
}
