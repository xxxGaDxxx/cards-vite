import { Meta, StoryObj } from '@storybook/react'

import { Radio } from './radio.tsx'

const meta = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    dataRadio: [
      {
        id: '1',
        label: 'js',
        value: 'js',
      },
      {
        id: '2',
        label: 'REACT',
        value: 'react',
      },
      {
        id: '3',
        label: '123123',
        value: '123123',
      },
      {
        id: '4',
        label: 'number',
        value: 'number',
      },
    ],
    defaultValue: 'react',
  },
}
