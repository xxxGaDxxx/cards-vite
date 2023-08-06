import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { ItemsType, Tabs } from './tabs.tsx'

export default {
  title: 'Components/Tabs',
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export const Default = {
  render() {
    const tabs = [
      {
        key: '1',
        label: `Tab 1`,
      },
      {
        key: '2',
        label: `Tab 2`,
      },
      {
        key: '3',
        label: `Tab 3`,
      },
    ]

    const [activeBtn, setActiveBtn] = useState(tabs[1])

    const onClickHandler = (item: ItemsType) => {
      setActiveBtn(item)
    }

    return <Tabs items={tabs} onClick={onClickHandler} activeButton={activeBtn} />
  },
}
