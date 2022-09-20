import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import { render, screen, userEvent } from './utils/test-utils'

describe('Simple working test', () => {
  it('The title is visible', () => {
    render(<App />)
    expect(
      screen.getByText(/Tap the logos below to learn more/i)
      // TODO: test for responsive text given mouse/pointer (fine) availability
      // How should we mock the window.matchMedia() function?
      // screen.getByText(/Click on the logos below to learn more/i)
    ).toBeInTheDocument()
  })

  it('Should increment count on click', async () => {
    render(<App />)
    userEvent.click(screen.getByRole('button', { name: /count is 0/i }))
    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', { name: /count is 1/i }))
    expect(await screen.findByText(/count is 2/i)).toBeInTheDocument()
  })

  it('Should toggle animations on click', async () => {
    render(<App />)
    userEvent.click(
      screen.getByRole('button', { name: /🚫 Disable animations/i })
    )
    expect(await screen.findByText(/✅ Enable animations/i)).toBeInTheDocument()

    userEvent.click(
      screen.getByRole('button', { name: /✅ Enable animations/i })
    )
    expect(
      await screen.findByText(/🚫 Disable animations/i)
    ).toBeInTheDocument()
  })

  // it('uses flexbox in app header', async () => {
  //   render(<App />)
  //   const element = screen.getByRole('banner')
  //   expect(element.className).toEqual('App-header')
  //   expect(getComputedStyle(element).display).toEqual('flex')
  // })
})
