// import { beforeEach, vi } from 'vitest'
import '@testing-library/jest-dom'
import ResizeObserver from 'resize-observer-polyfill'
import { mockIntersectionObserver } from './mocks/intersectionObserverMock'
import { mockMatchMedia } from './mocks/matchMediaMock'

global.ResizeObserver = ResizeObserver
mockIntersectionObserver()
mockMatchMedia()
