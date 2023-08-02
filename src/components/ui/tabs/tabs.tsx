import { FC, useState } from 'react'

import { clsx } from 'clsx'

import s from './tabs.module.scss'

export type ItemsType = {
  key: string
  label: string
}

export type TabsType = {
  items: ItemsType[]
  onClick: (item: ItemsType) => void
  defaultActiveKey?: string
  className?: string
}

export const Tabs: FC<TabsType> = ({ defaultActiveKey, onClick, items, className }) => {
  const [activeButton, setActiveButton] = useState(defaultActiveKey || items?.at(0))

  const onClickHandler = (item: ItemsType) => {
    onClick(item)
    setActiveButton(item.key)
  }

  return (
    <div className={clsx(s.container, className && className)}>
      {items?.map(item => {
        return (
          <button
            key={item.key}
            onClick={() => onClickHandler(item)}
            className={clsx(s.button, item.key === activeButton && s.active)}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
