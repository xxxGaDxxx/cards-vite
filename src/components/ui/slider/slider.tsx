import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './slider.module.scss'

export const Slider = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
  ({ className, ...restProps }, ref) => {
    return (
      <div className={s.container}>
        <Typography as={'span'} variant={'body1'} className={s.rectangle}>
          {restProps?.value?.at(0)}
        </Typography>
        <Root ref={ref} className={clsx(s.sliderRoot, className)} {...restProps}>
          <Track className={s.sliderTrack}>
            <Range className={s.sliderRange} />
          </Track>
          <Thumb className={s.sliderThumb} aria-label="Volume" />
          <Thumb className={s.sliderThumb} aria-label="Volume" />
        </Root>

        <Typography as={'span'} variant={'body1'} className={s.rectangle}>
          {restProps?.value?.at(1)}
        </Typography>
      </div>
    )
  }
)
