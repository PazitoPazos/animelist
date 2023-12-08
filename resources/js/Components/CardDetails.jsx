import StarIcon from './Icons/StarIcon'

export default function CardDetails({ animeInfo, show = false }) {
  const { title, avgScore, year, format, studios, genres, description } =
    animeInfo

  return (
    <div
      className={
        'relative z-0 flex h-60 flex-col gap-1 overflow-auto rounded-3xl border-2 border-black bg-white p-2 text-xs transition ' +
        (show ? '-translate-y-60 opacity-100' : 'opacity-0')
      }
    >
      <span className="text-base font-bold">{title}</span>
      <span className="flex items-center text-base font-bold">
        {avgScore} {<StarIcon className="h-6 w-6" fill='#fd0' />}
      </span>
      <div className="flex justify-between">
        <span>{year}</span>
        <span>{format}</span>
      </div>
      <span>{studios.join(' ')}</span>
      <span>{genres.join(' ')}</span>
      <span className="text-base font-bold">Description</span>
      <span>{description}</span>
    </div>
  )
}
