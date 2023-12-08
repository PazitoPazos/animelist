import { useState } from 'react'
import EllipsisHorizontalCircleIcon from './Icons/EllipsisHorizontalCircleIcon'
import InfoCircleIcon from './Icons/InfoCircleIcon'
import CardDetails from './CardDetails'
import CardOptions from './CardOptions'

export default function Card({ animeInfo }) {
  const [showDetails, setShowDetails] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  const { title, cover, href } = animeInfo

  return (
    <div className="relative z-0 select-none">
      <CardOptions show={showOptions} />

      <div className="h-60 overflow-hidden">
        <a href={href}>
          <picture>
            <img
              className="block h-60 w-full rounded-3xl border-2 border-black"
              src={cover}
              alt={title}
            />
          </picture>
        </a>
        <CardDetails animeInfo={animeInfo} show={showDetails} />
      </div>

      <div className="relative -z-10 -mt-10 flex h-20 items-end justify-around rounded-xl border-2 border-black bg-[#5EA6FB] pb-1">
        <button onClick={() => setShowDetails((prev) => !prev)}>
          <InfoCircleIcon />
        </button>
        <button onClick={() => setShowOptions((prev) => !prev)}>
          <EllipsisHorizontalCircleIcon />
        </button>
      </div>
      <a href={href}>
        <span className="font-bold">{title}</span>
      </a>
    </div>
  )
}
