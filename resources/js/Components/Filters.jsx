import AdjustmentsHorizontalIcon from './Icons/AdjustmentsHorizontalIcon';
import SearchIcon from './Icons/SearchIcon';
import SortIcon from './Icons/SortIcon';

export default function Filters() {
  return (
    <section className="flex items-center justify-between border-b-2 border-b-black px-4 py-2">
      <div className="flex items-center gap-2 rounded-lg border-2">
        <SearchIcon className="ml-1 h-6 w-6" />
        <input
          className="rounded-lg border-none px-0 py-1 focus:ring-0"
          type="search"
          placeholder="One Piece, Naruto..."
        />
      </div>
      <SortIcon />
      <AdjustmentsHorizontalIcon />
    </section>
  )
}
