import './App.css'
import { useState } from 'react'
// import React from 'react'
import { TechCarousel } from './components/tech-card'

const isMouseAvailable = window.matchMedia('(pointer:fine)').matches
const ifMouse = (a: unknown, b: unknown) => (isMouseAvailable ? a : b)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div className="flex flex-row space-x-2">
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
      <h2 className="text-3xl font-bold underline">Hello world!</h2> */}
      <div className="card">
        <p className="read-the-docs">
          <>
            {ifMouse('Click on', 'Tap')} the logos below to learn more about the
            technologies used in this project. <br />
            Or {ifMouse('click on', 'tap')} any of the titles to go to the
            &rdquo;getting started&ldquo; documentation.
          </>
        </p>
      </div>

      <TechCarousel />
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
