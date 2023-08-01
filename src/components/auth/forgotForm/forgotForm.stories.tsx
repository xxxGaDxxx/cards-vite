import type { Meta } from '@storybook/react'

import { ForgotForm } from './forgotForm.tsx'

export default {
  title: 'Components/ForgotForm',
  component: ForgotForm,
  tags: ['autodocs'],
} as Meta<typeof ForgotForm>

export const Default = {
  args: {
    onSubmit: () => {},
  },
}
