import type { Meta } from '@storybook/react'

import { RegisterForm } from './registerForm'

export default {
  title: 'Authorizing/Register Form',
  component: RegisterForm,
  tags: ['autodocs'],
} as Meta<typeof RegisterForm>

export const Default = {
  args: {
    onSubmit: () => {},
  },
}
