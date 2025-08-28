import { useContext } from 'react'
import { UserStoreContext } from './Provider'
import { UserState } from './store'
import { useStore } from 'zustand'

export const useUserStore = <T>(selector: (store: UserState) => T): T => {
  const counterStoreContext = useContext(UserStoreContext)

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`)
  }

  return useStore(counterStoreContext, selector)
}
