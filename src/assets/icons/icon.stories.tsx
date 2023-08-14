import { Arrow } from './arrow'
import { Check } from './check'
import { Close } from './close'
import { Edit } from './edit'
import { EmailIcon } from './emailIcon'
import { Eye } from './eye'
import { LogoIncubator } from './logoIncubator'
import { Logout } from './logout'
import { More } from './more'
import { PlayCircle } from './playCircle'
import { Profile } from './profile'
import { Search } from './search'
import { SignOut } from './signOut'
import { Trash } from './trash'
import { VisibilityOff } from './visibilityOff'

const meta = {
  title: 'Icons/All icon',
  tags: ['autodocs'],
}

export default meta
export const AllIcons = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Arrow size={16} />
        <Check />
        <Edit />
        <EmailIcon />
        <Eye />
        <LogoIncubator />
        <Logout />
        <More />
        <Profile />
        <Search />
        <SignOut />
        <VisibilityOff />
        <Close />
        <PlayCircle />
        <Trash />
      </div>
    )
  },
}
