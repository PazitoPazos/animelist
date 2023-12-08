export default function SearchIcon({
  className = 'w-8 h-8',
  fill = 'none',
  strokeWidth = 1.5,
  stroke = 'currentColor',
  props,
}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  )
}
