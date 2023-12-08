import { Link } from '@inertiajs/react'

export default function Header() {
  return (
    <header className="flex h-fit w-full items-center justify-between border-b-2 border-black px-4">
      <div className="py-2 text-center text-2xl font-bold uppercase">
        <Link href="/">AnimeList</Link>
      </div>
      <div className="h-8 w-8 rounded-full border-2 border-black ">
        <picture>
          <img
            className="h-auto w-full rounded-full"
            src="https://cdn.vectorstock.com/i/preview-1x/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg"
            alt="User Icon"
          />
        </picture>
      </div>
    </header>
  )
}
