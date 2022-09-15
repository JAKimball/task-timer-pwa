import './App.css'
import { useState } from 'react'
// import React from 'react'

import { TechProps, techList } from './tech-list'

import { useAutoAnimate } from '@formkit/auto-animate/react'

export function TechCard({
  imageUrl,
  imageAlt,
  title,
  message,
  introUrl,
  docsUrl,
}: TechProps): JSX.Element {
  return (
    <div className="p-4 max-w-sm mx-auto bg-[#ffffffc9] hover:bg-slate-50 rounded-xl shadow-md hover:shadow-lg flex items-center space-x-4 cursor-pointer">
      <div className="shrink-0">
        <a href={introUrl} target="_blank" rel="noopener noreferrer">
          <img className="cardLogo h-12 w-12" src={imageUrl} alt={imageAlt} />
        </a>
      </div>
      <div className="text-start">
        <a
          href={docsUrl}
          className="text-xl font-medium text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <p className="text-slate-500">{message}</p>
      </div>
    </div>
  )
}

// function randomizeNotifications(): NotificationProps[] {
//   return notificationList.sort(() => Math.random() - 0.5)
// }

enum techListOrder {
  Random,
  Ascending,
  Descending,
}

function sortCards(Order: techListOrder): TechProps[] {
  // switch (Order) {
  //   case NotificationOrder.Random:
  //     return randomizeNotifications()
  //   case NotificationOrder.Ascending:
  //     return notificationList.sort((a, b) => a.title.localeCompare(b.title))
  //   case NotificationOrder.Descending:
  //     return notificationList.sort((a, b) => b.title.localeCompare(a.title))
  // }

  type SortFunction = (a: TechProps, b: TechProps) => number
  const options: {
    [key in techListOrder]: SortFunction | undefined
  } = {
    [techListOrder.Random]: () => Math.random() - 0.5,
    [techListOrder.Ascending]: (a, b) => a.title.localeCompare(b.title),
    [techListOrder.Descending]: (a, b) => b.title.localeCompare(a.title),
  }
  return techList.sort(options[Order])
}

export function TechCarousel() {
  const [order, setOrder] = useState(techListOrder.Random)

  const [autoAnimateParent, autoAnimateEnabled] =
    useAutoAnimate<HTMLDivElement>({
      duration: 5000,
    })
  const [animating, setAnimating] = useState(true)
  const toggleAnimation = () => {
    setAnimating(!animating)
    autoAnimateEnabled(!animating)
  }

  return (
    <div className="App">
      {/* Sort Controls */}
      <div className="flex flex-row space-x-2">
        <button type="button" onClick={() => setOrder(techListOrder.Random)}>
          Random
        </button>
        <button type="button" onClick={() => setOrder(techListOrder.Ascending)}>
          Ascending
        </button>
        <button
          type="button"
          onClick={() => setOrder(techListOrder.Descending)}
        >
          Descending
        </button>
      </div>
      {/* render a list of cards here using the  component */}
      <div
        ref={autoAnimateParent}
        className="flex flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 md:space-x-4"
      >
        {sortCards(order).map((card) => (
          <TechCard
            key={card.title}
            imageUrl={card.imageUrl}
            imageAlt={card.imageAlt}
            title={card.title}
            message={card.message}
            introUrl={card.introUrl}
            docsUrl={card.docsUrl}
          />
        ))}
      </div>
      <button type="button" onClick={() => toggleAnimation()}>
        {animating ? '🚫 Disable' : '✅ Enable'} animations
      </button>
    </div>
  )
}
