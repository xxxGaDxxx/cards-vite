import type { Meta } from '@storybook/react'

import { RegisterForm } from './registerForm.tsx'

export default {
  title: 'Components/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
} as Meta<typeof RegisterForm>

export const Default = {
  args: {
    onSubmit: () => {},
  },
}
