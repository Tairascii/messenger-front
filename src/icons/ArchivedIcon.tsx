import { IconProps } from './types'

const ArchivedIcon = ({ fill = 'black' }: IconProps) => {
  return (
    <svg
      viewBox="6 6 24 24"
      fill="currentColor"
      width="20"
      height="20"
      aria-hidden="true"
      overflow="visible"
      style={{ fill }}
    >
      <path d="M8 7.5a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V8.5a1 1 0 0 0-1-1H8z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13.5a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v12a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3v-12zm4.5 3.25c0-.69.56-1.25 1.25-1.25h6.5a1.25 1.25 0 1 1 0 2.5h-6.5c-.69 0-1.25-.56-1.25-1.25z"
      ></path>
    </svg>
  )
}

export default ArchivedIcon
