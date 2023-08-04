import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Indicator, Item, Root } from '@radix-ui/react-radio-group'

import { Typography } from '../typography'

import s from './radio.module.scss'

export type DataRadioType = {
  id: string
  label: string
  value: string
}

type RadioType = {
  dataRadio: DataRadioType[]
}

export const Radio = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & RadioType
>(({ dataRadio, ...restProps }, ref) => {
  return (
    <Root ref={ref} className={s.radioGroupRoot} aria-label="View density" {...restProps}>
      {dataRadio.map(item => {
        return (
          <div key={item.id} className={s.containerItem}>
            <Item className={s.radioGroupItem} value={item.value} id={item.id}>
              <Indicator className={s.radioGroupIndicator} />
            </Item>
            <Typography as={'label'} variant={'body2'} htmlFor={item.id} className={s.label}>
              {item.label}
            </Typography>
          </div>
        )
      })}
    </Root>
  )
})
