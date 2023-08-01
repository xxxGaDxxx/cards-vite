import type { Meta } from '@storybook/react'

import { CreatePasswordForm } from './createPasswordForm.tsx'

export default {
  title: 'Components/CreatePasswordForm',
  component: CreatePasswordForm,
  tags: ['autodocs'],
} as Meta<typeof CreatePasswordForm>

export const Default = {
  args: {
    onSubmit: () => {},
  },
}
