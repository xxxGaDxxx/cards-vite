import { Meta, StoryObj } from '@storybook/react'

import { Profile, SignOut } from '../../../assets/icons'
import { Avatar } from '../avatar'

import { Dropdown, DropdownItemWithIcon } from '.'

const meta = {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const WithTriggerButton: Story = {
  render: args => {
    return (
      <div>
        <Dropdown
          trigger={
            <button>
              <Avatar
                src={'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'}
                name={'Vlad'}
              />
            </button>
          }
          {...args}
        >
          <>
            <DropdownItemWithIcon icon={<Profile />} text="Learn" onSelect={() => {}} />
            <DropdownItemWithIcon icon={<SignOut />} text="Delete" onSelect={() => {}} />
          </>
        </Dropdown>
      </div>
    )
  },
}
