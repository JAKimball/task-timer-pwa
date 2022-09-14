import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import typeScriptLogo from './assets/typescript-icon.svg'
import jestLogo from './assets/jest.svg'
import webpackLogo from './assets/webpack.svg'
import babelLogo from './assets/babel.svg'
import eslintLogo from './assets/eslint.svg'
import prettierLogo from './assets/prettier.svg'
import postcssLogo from './assets/postcss.svg'
import tailwindcssLogo from './assets/tailwindcss-icon.svg'
import viteLogo from './assets/vite.svg'
import swcLogo from './assets/swc-bw.svg'
import esbuildLogo from './assets/esbuild.svg'
import windicssLogo from './assets/windicss.svg'
import webassemblyLogo from './assets/webassembly.svg'
import vitestLogo from './assets/vitest.svg'
import nodeLogo from './assets/nodejs-icon.svg'
import npmLogo from './assets/npm.svg'
import yarnLogo from './assets/yarn.svg'
import pnpmLogo from './assets/pnpm.svg'
import v8Logo from './assets/v8.svg'
import visualStudioCodeLogo from './assets/visual-studio-code.svg'
import githubLogo from './assets/github.svg'
import gitLogo from './assets/git.svg'
import markdownLogo from './assets/markdown.svg'
import figmaLogo from './assets/figma.svg'
import html5Logo from './assets/html-5.svg'
import css3Logo from './assets/css-3.svg'
import mongodbLogo from './assets/mongodb.svg'
import postgresqlLogo from './assets/postgresql.svg'
import mdxLogo from './assets/mdx.svg'

import { useAutoAnimate } from '@formkit/auto-animate/react'

const notificationList: NotificationProps[] = [
  {
    imageUrl: reactLogo,
    imageAlt: 'React logo',
    title: 'React',
    message: 'A JavaScript library for building user interfaces',
  },
  {
    imageUrl: viteLogo,
    imageAlt: 'Vite logo',
    title: 'Vite',
    // eslint-disable-next-line quotes
    message: "Next generation frontend tooling. It's fast!",
  },
  {
    imageUrl: vitestLogo,
    imageAlt: 'Vitest logo',
    title: 'Vitest',
    // eslint-disable-next-line quotes
    message: "A Vite-native unit test framework. It's fast!",
    // message: 'A fast and simple test runner for Vue 3',
  },
  {
    imageUrl: swcLogo,
    imageAlt: 'SWC logo',
    title: 'SWC',
    message: 'A super-fast JavaScript and TypeScript compiler',
  },
  {
    imageUrl: esbuildLogo,
    imageAlt: 'esbuild logo',
    title: 'esbuild',
    message: 'An extremely fast JavaScript bundler',
  },
  {
    imageUrl: tailwindcssLogo,
    imageAlt: 'Tailwind CSS logo',
    title: 'Tailwind CSS',
    message:
      'A utility-first CSS framework for rapidly building custom designs',
  },
  {
    imageUrl: postcssLogo,
    imageAlt: 'PostCSS logo',
    title: 'PostCSS',
    message: 'A tool for transforming CSS with JavaScript',
  },
  {
    imageUrl: windicssLogo,
    imageAlt: 'Windi CSS logo',
    title: 'Windi CSS',
    message: 'A utility-first CSS framework for rapid UI development',
  },
  {
    imageUrl: typeScriptLogo,
    imageAlt: 'TypeScript logo',
    title: 'TypeScript',
    message: 'An open-source language which builds on JavaScript',
  },
  {
    imageUrl: prettierLogo,
    imageAlt: 'Prettier logo',
    title: 'Prettier',
    message: 'An opinionated code formatter',
  },
  {
    imageUrl: eslintLogo,
    imageAlt: 'ESLint logo',
    title: 'ESLint',
    message:
      'A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript',
  },
  {
    imageUrl: jestLogo,
    imageAlt: 'Jest logo',
    title: 'Jest',
    message:
      'A delightful JavaScript Testing Framework with a focus on simplicity',
  },
  {
    imageUrl: webpackLogo,
    imageAlt: 'Webpack logo',
    title: 'Webpack',
    message: 'A static module bundler for modern JavaScript applications',
  },
  {
    imageUrl: babelLogo,
    imageAlt: 'Babel logo',
    title: 'Babel',
    message: 'The compiler for writing next generation JavaScript',
  },
  {
    imageUrl: webassemblyLogo,
    imageAlt: 'WebAssembly logo',
    title: 'WebAssembly',
    message: 'A binary instruction format for a stack-based virtual machine',
  },
  {
    imageUrl: v8Logo,
    imageAlt: 'V8 logo',
    title: 'V8',
    message:
      'Google’s open source high-performance JavaScript and WebAssembly engine',
  },
  {
    imageUrl: nodeLogo,
    imageAlt: 'Node.js logo',
    title: 'Node.js',
    message: 'A JavaScript runtime built on Chrome’s V8 JavaScript engine',
  },
  {
    imageUrl: npmLogo,
    imageAlt: 'npm logo',
    title: 'npm',
    message: 'A package manager for the JavaScript programming language',
  },
  {
    imageUrl: yarnLogo,
    imageAlt: 'Yarn logo',
    title: 'Yarn',
    message: 'A package manager that doubles down as project manager',
  },
  {
    imageUrl: pnpmLogo,
    imageAlt: 'pnpm logo',
    title: 'pnpm',
    message: 'A fast, disk space efficient package manager',
  },
  {
    imageUrl: visualStudioCodeLogo,
    imageAlt: 'Visual Studio Code logo',
    title: 'Visual Studio Code',
    message:
      'A code editor redefined and optimized for building and debugging modern web and cloud applications',
  },

  // github
  {
    imageUrl: githubLogo,
    imageAlt: 'GitHub logo',
    title: 'GitHub',
    message: 'A code hosting platform for version control and collaboration',
  },

  // git
  {
    imageUrl: gitLogo,
    imageAlt: 'Git logo',
    title: 'Git',
    message: 'A free and open source distributed version control system',
  },

  // markdown
  {
    imageUrl: markdownLogo,
    imageAlt: 'Markdown logo',
    title: 'Markdown',
    message: 'A lightweight markup language with plain text formatting syntax',
  },

  // figma
  {
    imageUrl: figmaLogo,
    imageAlt: 'Figma logo',
    title: 'Figma',
    message: 'A collaborative interface design tool',
  },
  // css3
  {
    imageUrl: css3Logo,
    imageAlt: 'CSS3 logo',
    title: 'CSS3',
    message:
      'A style sheet language used for describing the presentation of a document written in a markup language',
  },
  // html5
  {
    imageUrl: html5Logo,
    imageAlt: 'HTML5 logo',
    title: 'HTML5',
    message:
      'A markup language used for structuring and presenting content on the World Wide Web',
  },
  // mdx
  {
    imageUrl: mdxLogo,
    imageAlt: 'MDX logo',
    title: 'MDX',
    message: 'A JSX in Markdown for ambitious projects',
  },
  // mongodb
  {
    imageUrl: mongodbLogo,
    imageAlt: 'MongoDB logo',
    title: 'MongoDB',
    message: 'A cross-platform document-oriented database program',
  },
  // postgresql
  {
    imageUrl: postgresqlLogo,
    imageAlt: 'PostgreSQL logo',
    title: 'PostgreSQL',
    message: 'A powerful, open source object-relational database system',
  },
]

interface NotificationProps {
  imageUrl: string
  imageAlt: string
  title: string
  message: string
}

function Notification({
  imageUrl,
  imageAlt,
  title,
  message,
}: NotificationProps): JSX.Element {
  return (
    <div className="p-4 max-w-sm mx-auto bg-[#e8f2f5e3] hover:bg-slate-50 rounded-xl shadow-md hover:shadow-lg flex items-center space-x-4 cursor-pointer">
      <div className="shrink-0">
        <img className="h-12 w-12" src={imageUrl} alt={imageAlt} />
      </div>
      <div>
        <div className="text-xl font-medium text-black">{title}</div>
        <p className="text-slate-500">{message}</p>
      </div>
    </div>
  )
}

// function randomizeNotifications(): NotificationProps[] {
//   return notificationList.sort(() => Math.random() - 0.5)
// }

enum NotificationOrder {
  Random,
  Ascending,
  Descending,
}

function sortNotifications(Order: NotificationOrder): NotificationProps[] {
  // switch (Order) {
  //   case NotificationOrder.Random:
  //     return randomizeNotifications()
  //   case NotificationOrder.Ascending:
  //     return notificationList.sort((a, b) => a.title.localeCompare(b.title))
  //   case NotificationOrder.Descending:
  //     return notificationList.sort((a, b) => b.title.localeCompare(a.title))
  // }

  type SortFunction = (a: NotificationProps, b: NotificationProps) => number
  const options: {
    [key in NotificationOrder]: SortFunction | undefined
  } = {
    [NotificationOrder.Random]: () => Math.random() - 0.5,
    [NotificationOrder.Ascending]: (a, b) => a.title.localeCompare(b.title),
    [NotificationOrder.Descending]: (a, b) => b.title.localeCompare(a.title),
  }
  return notificationList.sort(options[Order])
}

function App() {
  const [count, setCount] = useState(0)
  const [order, setOrder] = useState(NotificationOrder.Random)

  const [autoAnimateParent, autoAnimateEnabled] =
    useAutoAnimate(/* optional config */)
  const [animating, setAnimating] = useState(true)
  const toggleAnimation = () => {
    setAnimating(!animating)
    autoAnimateEnabled(!animating)
  }

  return (
    <div className="App">
      <div className="flex flex-row space-x-2">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1
        className="m-4 2xl border-slate-600 border-4 border-solid rounded-2xl"
        onClick={() => setCount((count) => count * 2)}
      >
        Vite + React
      </h1>
      <h2 className="text-3xl font-bold underline">Hello world!</h2>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Sort Controls */}
      <div className="flex flex-row space-x-2">
        <button
          type="button"
          onClick={() => setOrder(NotificationOrder.Random)}
        >
          Random
        </button>
        <button
          type="button"
          onClick={() => setOrder(NotificationOrder.Ascending)}
        >
          Ascending
        </button>
        <button
          type="button"
          onClick={() => setOrder(NotificationOrder.Descending)}
        >
          Descending
        </button>
      </div>
      {/* render a list of notifications here using the Notification component */}
      <div
        ref={autoAnimateParent}
        className="flex flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 md:space-x-4"
      >
        {sortNotifications(order).map((notification) => (
          <Notification
            key={notification.title}
            imageUrl={notification.imageUrl}
            imageAlt={notification.imageAlt}
            title={notification.title}
            message={notification.message}
          />
        ))}
      </div>
      <button type="button" onClick={() => toggleAnimation()}>
        {animating ? '🚫 Disable' : '✅ Enable'} animations
      </button>
    </div>
  )
}

export default App
