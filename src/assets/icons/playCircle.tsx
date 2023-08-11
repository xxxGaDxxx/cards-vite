import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={17} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M8 1.833a6.667 6.667 0 1 0 2.551.508A6.667 6.667 0 0 0 8 1.833Zm0 12A5.333 5.333 0 1 1 8 3.168a5.333 5.333 0 0 1 0 10.665Z"
    />
    <path
      fill="#fff"
      d="M8.227 5.467a1.133 1.133 0 0 0-.587-.286 1.133 1.133 0 0 0-.647.086 1.067 1.067 0 0 0-.483.391 1.067 1.067 0 0 0-.183.595v4.494a1.067 1.067 0 0 0 .666.986c.145.066.302.1.46.1a1.16 1.16 0 0 0 .774-.3l2.44-2.246c.109-.1.196-.222.256-.357a1.067 1.067 0 0 0 .09-.43 1.067 1.067 0 0 0-.346-.787l-2.44-2.246Zm-.56 4.766V6.767L9.54 8.5l-1.873 1.733Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const PlayCircle = memo(ForwardRef)
