import type { Meta } from '@storybook/react'

import { Checkbox } from './checkbox.tsx'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} as Meta<typeof Checkbox>

export const Uncontrolled = {
  args: {
    label: 'Click here',
    disabled: false,
  },
}
