import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={17} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M14 4.5h-3.333V3.387A1.613 1.613 0 0 0 9 1.833H7a1.613 1.613 0 0 0-1.667 1.554V4.5H2a.667.667 0 1 0 0 1.333h.667v7.334a2 2 0 0 0 2 2h6.666a2 2 0 0 0 2-2V5.833H14A.666.666 0 1 0 14 4.5ZM6.667 3.387c0-.107.14-.22.333-.22h2c.193 0 .333.113.333.22V4.5H6.667V3.387ZM12 13.167a.667.667 0 0 1-.667.666H4.667A.667.667 0 0 1 4 13.167V5.833h8v7.334Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Trash = memo(ForwardRef)
