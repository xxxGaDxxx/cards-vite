import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'

import { Card } from './card.tsx'

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
