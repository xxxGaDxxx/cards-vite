import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'

import { Tabs } from './tabs.tsx'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
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
    ],
    defaultActiveKey: '2',
    onClick: () => {},
  },
}
