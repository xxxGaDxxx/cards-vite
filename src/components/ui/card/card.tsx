import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type CardType = {
  children: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Card: FC<CardType> = ({ className, ...restProps }) => {
  return <div className={clsx(s.card, className)} {...restProps}></div>
}
