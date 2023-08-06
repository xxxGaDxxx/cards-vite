import { FC } from 'react'

import { clsx } from 'clsx'

import s from './tabs.module.scss'

export type ItemsType = {
  key: string
  label: string
}

export type TabsType = {
  items: ItemsType[]
  onClick: (item: ItemsType) => void
  activeButton: ItemsType
  className?: string
}

export const Tabs: FC<TabsType> = ({ activeButton, onClick, items, className }) => {
  const onClickHandler = (item: ItemsType) => {
    onClick(item)
  }

  return (
    <div className={clsx(s.container, className && className)}>
      {items?.map(item => {
        return (
          <button
            key={item.key}
            onClick={() => onClickHandler(item)}
            className={clsx(s.button, item.key === activeButton.key && s.active)}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
