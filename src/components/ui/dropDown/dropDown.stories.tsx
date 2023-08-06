import { Meta, StoryObj } from '@storybook/react'

import { Profile, SignOut } from '../../../assets/icons'
import { Avatar } from '../avatar'

import { DropDown } from './dropDown.tsx'

const meta = {
  title: 'Components/Drop Down',
  component: DropDown,
  tags: ['autodocs'],
} satisfies Meta<typeof DropDown>

export default meta
type Story = StoryObj<typeof meta>

export const AvaProfile: Story = {
  args: {
    label: 'Name',
    dataMenu: [
      {
        id: '2',
        label: 'My Profile',
        icon: <Profile />,
      },
      {
        id: '3',
        label: 'Sign Out',
        icon: <SignOut />,
      },
    ],
    icon: (
      <Avatar
        src={'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'}
        name={'Vlad'}
      />
    ),
  },
}
