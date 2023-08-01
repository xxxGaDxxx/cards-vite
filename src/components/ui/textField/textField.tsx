import { ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import { Eye, Search, VisibilityOff } from '../../../assets/icons'
import { Typography } from '../typography'

import s from './textField.module.scss'

export type TextFieldProps = {
  onValueChange?: (value: string) => void
  containerProps?: ComponentProps<'div'>
  labelProps?: ComponentProps<'label'>
  errorMessage?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      errorMessage,
      placeholder,
      type,
      containerProps,
      labelProps,
      label,
      onChange,
      onValueChange,
      ...restProps
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const isShowPasswordButtonShown = type === 'password'
    const isShowSearchSvg = type === 'search'

    const finalType = getFinalType(type, showPassword)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    const classNames = {
      root: clsx(s.root, containerProps?.className),
      fieldContainer: clsx(s.fieldContainer),
      field: clsx(s.field, !!errorMessage && s.error, isShowSearchSvg && s.paddingStart, className),
      label: clsx(s.label, labelProps?.className),
      error: clsx(s.error, s.messageError),
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography variant="body2" as="label" className={classNames.label}>
            {label}
          </Typography>
        )}
        <div className={classNames.fieldContainer}>
          {isShowSearchSvg && (
            <span className={s.showSearch}>
              <Search />
            </span>
          )}

          <input
            className={classNames.field}
            placeholder={placeholder}
            ref={ref}
            type={finalType}
            onChange={handleChange}
            {...restProps}
          />
          {isShowPasswordButtonShown && (
            <button
              className={s.showPassword}
              type={'button'}
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? <VisibilityOff /> : <Eye />}
            </button>
          )}

          <Typography variant="error" className={classNames.error}>
            {errorMessage}
          </Typography>
        </div>
      </div>
    )
  }
)

function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
