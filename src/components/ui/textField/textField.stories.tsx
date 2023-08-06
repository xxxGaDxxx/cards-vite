import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './textField.tsx'

const meta: Meta<typeof TextField> = {
  title: 'Components/Text Field',
  component: TextField,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
}

export const Password: Story = {
  args: {
    label: 'Label',
    placeholder: 'Password',
    type: 'password',
  },
}

export const Search: Story = {
  args: {
    label: 'Label',
    placeholder: 'Search',
    type: 'search',
  },
}

export const Error: Story = {
  args: {
    label: 'Input with error',
    value: 'Wrong value',
    errorMessage: 'Error message',
  },
}
