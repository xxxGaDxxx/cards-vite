import { clsx } from 'clsx'

import { Arrow } from '../../../../assets/icons'

import s from './controlButton.module.scss'

type ControlButtonProps = {
  onClick: () => void
  disabled?: boolean
  direction?: 'left' | 'right' | 'top' | 'bottom'
}
export const ControlButton = ({ onClick, disabled, direction = 'top' }: ControlButtonProps) => {
  return (
    <button className={s.item} onClick={onClick} disabled={disabled}>
      <Arrow className={clsx(s[direction], s.icon)} />
    </button>
  )
}
