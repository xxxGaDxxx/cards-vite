import { useState } from 'react'

import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react'

import { Button } from '../button'
import { TextField } from '../textField'
import { Typography } from '../typography'

import { Modal, ModalType } from './modal'

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Modal>

const commonArgs = {
  children: (
    <>
      <Typography variant={'body2'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Typography>
      <TextField type={'text'} label={'Input'} placeholder={'Input'} />
      <TextField type={'password'} label={'Input'} placeholder={'Input'} />
      <TextField type={'search'} label={'Input'} placeholder={'Input'} />
    </>
  ),
  open: true,
}

export const DefaultModal = {
  render: (args: ModalType) => {
    const [open, setOpen] = useState(false)

    const handleModalClosed = () => {
      setOpen(false)
    }
    const handleModalOpened = () => {
      setOpen(true)
    }

    return (
      <>
        <Button onClick={handleModalOpened}>Open modal</Button>
        <Modal
          {...args}
          isOpen={open}
          onOpenChange={handleModalClosed}
          renderActionButton={() => <Button onClick={action('Save')}>Save</Button>}
        >
          <Typography variant={'body2'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Modal>
      </>
    )
  },
  args: {
    ...commonArgs,
    title: 'Default modal',
  },
}

export const ModalWithSaveButton = {
  render: (args: ModalType) => {
    const [open, setOpen] = useState(false)
    const handleModalClosed = () => {
      setOpen(false)
    }
    const handleModalOpened = () => {
      setOpen(true)
    }

    return (
      <>
        <Button onClick={handleModalOpened}>Open modal</Button>
        <Modal
          {...args}
          isOpen={open}
          renderActionButton={() => <Button onClick={action('Save')}>Save</Button>}
          onOpenChange={handleModalClosed}
        ></Modal>
      </>
    )
  },
  args: {
    ...commonArgs,
    title: 'With One Button',
  },
}

export const ModalWithDoubleButton = {
  render: (args: ModalType) => {
    const [open, setOpen] = useState(false)
    const handleModalClosed = () => {
      setOpen(false)
    }
    const handleModalOpened = () => {
      setOpen(true)
    }

    return (
      <>
        <Button onClick={handleModalOpened}>Open modal</Button>
        <Modal
          {...args}
          isOpen={open}
          title={'With two Buttons'}
          renderActionButton={() => <Button onClick={action('Save')}>Save</Button>}
          renderCancelButton={() => (
            <Button variant={'secondary'} onClick={action('Cancel')}>
              Cancel
            </Button>
          )}
          onOpenChange={handleModalClosed}
        />
      </>
    )
  },
  args: {
    ...commonArgs,
    title: 'With two Buttons',
  },
}
