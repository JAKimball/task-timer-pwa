import { vi } from 'vitest'

export const mockMatchMedia = () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: unknown) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
}

// The mockMatchMedia function is used to mock the matchMedia function. This
// function is used by the useMediaQuery hook to determine if the media query
// matches. The mockMatchMedia uses the vi.fn() function to create a mock
// function that can be used to mock the matchMedia function. The function
// passed to the mockImplementation method returns an object with the same
// properties as the matchMedia function. The matches property is set to false
// to indicate that the media query does not match. The media property is set
// to the query parameter. The other properties are set to mock functions.
