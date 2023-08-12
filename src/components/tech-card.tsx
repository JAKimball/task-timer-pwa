import '../App.css'
import { useMemo, useState } from 'react'
// import React from 'react'

import { TechProps, TechCategory, techList } from './tech-list'

import { useAutoAnimate } from '@formkit/auto-animate/react'

export function TechCard({
  imageUrl,
  imageAlt,
  title,
  description,
  introUrl,
  docsUrl,
}: TechProps): JSX.Element {
  return (
    <div className="tech-card p-4 m-2 w-full overflow-hidden sm:w-5/12 lg:w-3/12 bg-[#ffffffb0] hover:bg-slate-50 rounded-xl shadow-md hover:shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        {/* <a href={introUrl} target="_blank" rel="noopener noreferrer"> */}
        <img className="card-logo h-16 w-16" src={imageUrl} alt={imageAlt} />
        {/* </a> */}
      </div>
      <div className="text-start">
        <h2 className="text-xl font-medium text-black">{title}</h2>
        <p className="text-slate-500">{description}</p>
        {/* If the card is hovered, show in a bullet list the introUrl and docsUrl if they are defined, and not empty. Include the docsUrl only if it is not the same as the introUrl. */}

        <div className="tech-card-links">
          {introUrl && (
            <ul className="list-none list-inside">
              <li>
                <a
                  className="list-item text-sky-500 hover:text-sky-600"
                  href={introUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About &rarr;
                </a>
              </li>
              {docsUrl && docsUrl !== introUrl && (
                <li>
                  <a
                    className="list-item text-sky-500 hover:text-sky-600"
                    href={docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the docs &rarr;
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

enum techListOrder {
  Random,
  Ascending,
  Descending,
}

function sortCards(Order: techListOrder): TechProps[] {
  type SortFunction = (a: TechProps, b: TechProps) => number
  const options: SortFunction[] = [
    () => Math.random() - 0.5, // Random
    (a, b) => a.title.localeCompare(b.title), // Ascending
    (a, b) => b.title.localeCompare(a.title), // Descending
  ]
  return techList.sort(options[Order])
}

function techCategories(): TechCategory[] {
  const categories: TechCategory[] = []
  techList.forEach(tech => {
    if (tech.category !== undefined) {
      if (!categories.includes(tech.category)) {
        categories.push(tech.category)
      }
    }
  })
  return categories.sort((a, b) => a.localeCompare(b))
}

export function TechCarousel() {
  const [order, setOrder] = useState(techListOrder.Ascending)
  const [displayCategories, setDisplayCategories] = useState(true)
  const categories = useMemo(() => techCategories(), [])

  const [autoAnimateParent, autoAnimateEnabled] = useAutoAnimate<HTMLDivElement>({
    // duration: 3000,
  })
  const [animating, setAnimating] = useState(true)
  const toggleAnimation = () => {
    setAnimating(!animating)
    autoAnimateEnabled(!animating)
  }

  return (
    <div className="App">
      {/* Sort/Filter Controls */}

      {/* By Category */}
      <button type="button" onClick={() => setDisplayCategories(!displayCategories)}>
        {displayCategories ? '🚫 Hide' : '✅ Show'} Categories
      </button>

      {/* Sort Order */}
      <div className="flex flex-row flex-wrap space-x-2 gap-2 justify-center">
        <button
          type="button"
          className={order === techListOrder.Random ? 'underline' : ''}
          onClick={() => setOrder(techListOrder.Random)}
        >
          Random
        </button>
        <button
          type="button"
          className={order === techListOrder.Ascending ? 'underline' : ''}
          onClick={() => setOrder(techListOrder.Ascending)}
        >
          Ascending
        </button>
        <button
          type="button"
          className={order === techListOrder.Descending ? 'underline' : ''}
          onClick={() => setOrder(techListOrder.Descending)}
        >
          Descending
        </button>
      </div>

      <button type="button" onClick={() => toggleAnimation()}>
        {animating ? '🚫 Disable' : '✅ Enable'} animations
      </button>
      {/* render a list of cards here using the component */}
      <div
        ref={autoAnimateParent}
        // className="flex flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 md:space-x-4"
        className="flex flex-wrap -mx-2 overflow-hidden justify-center"
      >
        {displayCategories
          ? categories.map(category => (
              <div key={category} className="w-full justify-center">
                <h2 className="text-2xl font-bold">{category}</h2>
                <div className="flex flex-wrap overflow-hidden justify-center">
                  {sortCards(order).map(card => {
                    if (card.category === category) {
                      return (
                        <TechCard
                          key={card.title}
                          imageUrl={card.imageUrl}
                          imageAlt={card.imageAlt}
                          title={card.title}
                          description={card.description}
                          introUrl={card.introUrl}
                          docsUrl={card.docsUrl}
                        />
                      )
                    }
                  })}
                </div>
              </div>
            ))
          : sortCards(order).map(card => (
              <TechCard
                key={card.title}
                imageUrl={card.imageUrl}
                imageAlt={card.imageAlt}
                title={card.title}
                description={card.description}
                introUrl={card.introUrl}
                docsUrl={card.docsUrl}
              />
            ))}
      </div>
    </div>
  )
}
