import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#FFFEFE"
      d="M3.676 6.306a.667.667 0 0 1 1.093-.514L8.343 8.78l3.58-2.88a.666.666 0 0 1 .94.1.666.666 0 0 1-.1.973l-4 3.22a.666.666 0 0 1-.847 0l-4-3.333a.667.667 0 0 1-.24-.553Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Arrow = memo(ForwardRef)
