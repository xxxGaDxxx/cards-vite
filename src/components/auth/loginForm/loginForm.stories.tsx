import type { Meta } from '@storybook/react'

import { LoginForm } from './loginForm.tsx'

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
} as Meta<typeof LoginForm>

export const Default = {
  args: {
    onSubmit: () => {},
  },
}
