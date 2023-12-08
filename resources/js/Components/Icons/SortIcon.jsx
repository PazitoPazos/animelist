export default function SortIcon({
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
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
      />
    </svg>
  )
}
