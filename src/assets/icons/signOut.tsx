import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <g fill="#fff" clipPath="url(#a)">
      <path d="M4.667 4a.667.667 0 1 0 0-1.333H3.333a.667.667 0 0 0-.666.667v9.333a.667.667 0 0 0 .666.667h1.334a.667.667 0 1 0 0-1.333H4V4h.667ZM13.88 7.614 12 4.947a.667.667 0 1 0-1.087.774l1.147 1.613H6.667a.667.667 0 0 0 0 1.333H12l-1.2 1.6a.67.67 0 0 0 .133.934.667.667 0 0 0 .934-.134l2-2.666a.667.667 0 0 0 .013-.787Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .001h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const SignOut = memo(ForwardRef)
