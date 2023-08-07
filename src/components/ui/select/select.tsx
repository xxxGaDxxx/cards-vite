import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import * as SelectRadix from '@radix-ui/react-select'

import { Arrow } from '../../../assets/icons'
import { Typography } from '../typography'

import s from './select.module.scss'

type DataSelectType = {
  key: string
  title: string
}

type SelectType = ComponentPropsWithoutRef<typeof SelectRadix.Root> & {
  dataSelect: DataSelectType[]
  placeholder?: string
  titleSelect?: string
}

export const Select: FC<SelectType> = ({
  titleSelect,
  dataSelect,
  placeholder,
  disabled,
  ...resProps
}) => {
  return (
    <div className={s.container}>
      {Boolean(titleSelect) && (
        <Typography as={'label'} variant={'body2'} className={disabled ? s.disabled : ''}>
          {titleSelect}
        </Typography>
      )}

      <SelectRadix.Root disabled={disabled} {...resProps}>
        <SelectRadix.Trigger className={s.selectTrigger}>
          <SelectRadix.Value placeholder={placeholder} />
          <SelectRadix.Icon className={s.selectIcon}>
            <Arrow />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content className={s.selectContent} position={'popper'} side={'bottom'}>
            <SelectRadix.Viewport asChild>
              <SelectRadix.Group>
                {dataSelect.map(item => {
                  return (
                    <SelectItem key={item.key} value={item.key}>
                      {item.title}
                    </SelectItem>
                  )
                })}
              </SelectRadix.Group>
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </div>
  )
}

const SelectItem = forwardRef<
  ElementRef<typeof SelectRadix.Item>,
  ComponentPropsWithoutRef<typeof SelectRadix.Item>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <SelectRadix.Item className={s.selectItem} {...props} ref={forwardedRef}>
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
    </SelectRadix.Item>
  )
})
