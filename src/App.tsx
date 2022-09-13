import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="flex flex-row space-x-2">
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1 className="m-4 2xl border-slate-600 border-4 border-solid rounded-2xl">
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

      <div className="flex flex-row space-x-4">
        <Notification
          imageUrl={reactLogo}
          imageAlt="React logo"
          title="React"
          message="A JavaScript library for building user interfaces"
        />
        <Notification
          imageUrl="/vite.svg"
          imageAlt="Vite logo"
          title="Vite"
          message="Next generation frontend tooling. It's fast!"
        />
      </div>
    </div>
  )
}

function Notification({
  imageUrl,
  imageAlt,
  title,
  message,
}: {
  imageUrl: string
  imageAlt: string
  title: string
  message: string
}): JSX.Element {
  return (
    <div className="p-6 max-w-sm mx-auto bg-[#e8f2f5e3] hover:bg-slate-50 rounded-xl shadow-md hover:shadow-lg flex items-center space-x-4 cursor-pointer">
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

export default App
