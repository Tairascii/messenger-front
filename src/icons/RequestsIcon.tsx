import { IconProps } from "./types"

const RequestsIcon = ({ fill = 'black' }: IconProps) => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 28.074c6.394 0 11-4.467 11-10.57v-.002c0-6.103-4.606-10.498-11-10.498-6.392 0-10.998 4.395-11 10.498v.002c.001 2.091.415 3.98 1.384 5.562.458.747.563 1.664.29 2.5l-.728 2.41c-.2.614.373 1.188.964.986l3.668-1.125a4.26 4.26 0 0 1 2.39-.09c.953.232 1.967.327 3.032.327zM13 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
      ></path>
    </svg>
  )
}

export default RequestsIcon
