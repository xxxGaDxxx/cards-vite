import { ComponentProps, FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { Close } from '../../../assets/icons'
import { Typography } from '../typography'

import s from './modal.module.scss'

export type ModalType = {
  children?: ReactNode
  title?: string
  onOpenChange?: (value: boolean) => void
  isOpen: boolean
  renderActionButton?: () => ReactNode
  renderCancelButton?: () => ReactNode
} & ComponentProps<'div'>

export const Modal: FC<ModalType> = ({ children, title, onOpenChange, isOpen }) => {
  return (
    <Dialog.Root onOpenChange={onOpenChange} open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.dialogOverlay} />
        <Dialog.Content className={s.dialogContent}>
          <div className={s.header}>
            <Dialog.Title>
              <Typography variant={'h2'}>{title}</Typography>
            </Dialog.Title>
            <Dialog.Close className={s.iconButton} aria-label="Close">
              <Close />
            </Dialog.Close>
          </div>
          <div className={s.content}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
