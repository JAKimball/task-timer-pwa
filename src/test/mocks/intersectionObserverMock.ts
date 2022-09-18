import { vi } from 'vitest'

export const mockIntersectionObserver = () => {
  const intersectionObserverMock = () => ({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  })
  window.IntersectionObserver = vi
    .fn()
    .mockImplementation(intersectionObserverMock)
}
