import { Arrow } from './arrow.tsx'
import { Check } from './check.tsx'
import { Close } from './close.tsx'
import { Edit } from './edit.tsx'
import { EmailIcon } from './emailIcon.tsx'
import { Eye } from './eye.tsx'
import { LogoIncubator } from './logoIncubator.tsx'
import { Logout } from './logout.tsx'
import { More } from './more.tsx'
import { PlayCircle } from './playCircle.tsx'
import { Profile } from './profile.tsx'
import { Search } from './search.tsx'
import { SignOut } from './signOut.tsx'
import { Trash } from './trash.tsx'
import { VisibilityOff } from './visibilityOff.tsx'

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
