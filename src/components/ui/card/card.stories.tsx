import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './card.tsx'
import { Button } from '../button'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Card content',
  },
}

export const DefaultContent: Story = {
  args: {
    children: (
      <>
        <Button variant={'secondary'}>card</Button>
      </>
    ),
  },
}
