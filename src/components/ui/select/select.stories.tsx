import { Meta, StoryObj } from '@storybook/react'

import { Select } from '../select'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    dataSelect: [
      { key: 'js', title: 'JS' },
      { key: 'ts', title: 'TS' },
      { key: 'react', title: 'React' },
      { key: 'css', title: 'Css' },
      { key: 'html', title: 'Html' },
    ],
    defaultValue: 'react',
  },
}
export const SelectName: Story = {
  args: {
    titleSelect: 'Select phone',
    dataSelect: [
      { key: 'iphone', title: 'Iphone' },
      { key: 'samsung', title: 'Samsung' },
      { key: 'nokia', title: 'Nokia' },
    ],
    defaultValue: 'nokia',
  },
}

export const SelectDisabled: Story = {
  args: {
    titleSelect: 'Select phone',
    dataSelect: [{ key: 'samsung', title: 'Samsung' }],
    defaultValue: 'samsung',
    disabled: true,
  },
}
