import BookmarkIcon from './Icons/BookmarkIcon'
import CheckCircleIcon from './Icons/CheckCircleIcon'
import EyeIcon from './Icons/EyeIcon'
import HeartIcon from './Icons/HeartIcon'
import TrashIcon from './Icons/TrashIcon'

export default function CardOptions({ orientation, show = false }) {
  return (
    <div
      className={
        'absolute right-0 -z-10 flex w-fit flex-col gap-4 rounded-lg border-2 border-black bg-[#5EA6FB] p-1.5 transition ' +
        (show ? 'translate-x-14 opacity-100' : 'opacity-0')
      }
    >
      <BookmarkIcon fill="orange" />
      <EyeIcon fill="#0af" />
      <CheckCircleIcon fill="#0d0" />
      <TrashIcon fill="#ddd" />
      <HeartIcon fill="red" />
    </div>
  )
}
