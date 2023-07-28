import { FC, ReactNode } from 'react'

import { Root, Trigger, Portal, Content, Item, Arrow } from '@radix-ui/react-dropdown-menu'

import { Typography } from '../typography'

import s from './dropDown.module.scss'

export type DataItem = {
  id: string
  label: string
  email?: string
  icon: ReactNode
}

type DropDownProps = {
  label: string
  icon?: ReactNode
  dataMenu?: DataItem[]
  onClickItem: (item: any) => void
}

export const DropDown: FC<DropDownProps> = ({ label, dataMenu, icon, onClickItem }) => {
  return (
    <Root>
      <Trigger className={s.trigger}>
        <Typography as={'span'} variant={'subtitle1'} className={s.labelTrigger}>
          {label}
        </Typography>

        {icon}
      </Trigger>

      <Portal>
        <Content className={s.content}>
          {dataMenu?.map(item => {
            return (
              <Item key={item.label} onClick={() => onClickItem(item)} className={s.item}>
                {item.icon}

                <div className={s.containerLabel}>
                  <Typography as={'span'} variant={'subtitle2'} className={s.containerText}>
                    {item.label}
                  </Typography>

                  {item.email && (
                    <Typography as={'span'} variant={'caption'} className={s.containerText}>
                      {item.email}
                    </Typography>
                  )}
                </div>
              </Item>
            )
          })}

          <Arrow className={s.arrowBox} asChild>
            <div className={s.arrow} />
          </Arrow>
        </Content>
      </Portal>
    </Root>
  )
}
