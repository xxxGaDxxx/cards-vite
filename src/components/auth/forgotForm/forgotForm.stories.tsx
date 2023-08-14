import type { Meta } from '@storybook/react'

import { ForgotForm } from './forgotForm'

export default {
  title: 'Authorizing/Forgot Form',
  component: ForgotForm,
  tags: ['autodocs'],
} as Meta<typeof ForgotForm>

export const Default = {
  args: {
    onSubmit: () => {},
  },
}
