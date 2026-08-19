import { useReducer } from 'react'

export function useForceUpdate(): () => void {
  const [, forceUpdate] = useReducer((value) => value + 1, 0)
  return forceUpdate
}

export default useForceUpdate
