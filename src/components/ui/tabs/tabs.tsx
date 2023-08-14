import { FC } from 'react'

import { clsx } from 'clsx'

import s from './tabs.module.scss'

export type TabsItemsType = {
  key: string
  label: string
}

export type TabsType = {
  items: TabsItemsType[]
  onClick: (item: TabsItemsType) => void
  activeButton: TabsItemsType
  className?: string
}

export const Tabs: FC<TabsType> = ({ activeButton, onClick, items, className }) => {
  const onClickHandler = (item: TabsItemsType) => {
    onClick(item)
  }

  return (
    <div className={clsx(s.container, className && className)}>
      {items?.map(item => {
        return (
          <button
            key={item.key}
            id={item.key}
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
