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
      { value: 'js', label: 'JS' },
      { value: 'ts', label: 'TS' },
      { value: 'react', label: 'React' },
      { value: 'css', label: 'Css' },
      { value: 'html', label: 'Html' },
    ],
    defaultValue: 'react',
  },
}
export const SelectName: Story = {
  args: {
    titleSelect: 'Select phone',
    dataSelect: [
      { value: 'iphone', label: 'Iphone' },
      { value: 'samsung', label: 'Samsung' },
      { value: 'nokia', label: 'Nokia' },
    ],
    defaultValue: 'nokia',
  },
}

export const SelectDisabled: Story = {
  args: {
    titleSelect: 'Select phone',
    dataSelect: [{ value: 'samsung', label: 'Samsung' }],
    defaultValue: 'samsung',
    disabled: true,
  },
}
