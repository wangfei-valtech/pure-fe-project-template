import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useForceUpdate } from './useForceUpdate'

describe('useForceUpdate', () => {
  it('rerenders when the returned function is called', () => {
    let renderCount = 0
    const { result } = renderHook(() => {
      renderCount += 1
      return useForceUpdate()
    })

    expect(renderCount).toBe(1)

    act(() => result.current())

    expect(renderCount).toBe(2)
  })
})
