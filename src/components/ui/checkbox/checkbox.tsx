import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import { Check } from '../../../assets/icons'
import { Typography } from '../typography'

import s from './checkbox.module.scss'

export type CheckboxType = {
  className?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
}

export const Checkbox: FC<CheckboxType> = props => {
  const { label, className, checked, id, required, disabled, onChange } = props

  const classNames = {
    container: clsx(s.container, className),
    label: clsx(s.label, disabled && s.disabled),
    button: s.button,
    indicator: s.indicator,
    checkWrapper: clsx(s.checkWrapper, disabled && s.disabled),
  }

  return (
    <div className={classNames.container}>
      <Typography as={'label'} variant="body2" className={classNames.label}>
        <div className={classNames.checkWrapper}>
          <CheckboxRadix.Root
            className={s.button}
            checked={checked}
            disabled={disabled}
            id={id}
            onCheckedChange={onChange}
            required={required}
          >
            {checked && (
              <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                <Check />
              </CheckboxRadix.Indicator>
            )}
          </CheckboxRadix.Root>
        </div>
        {label}
      </Typography>
    </div>
  )
}
