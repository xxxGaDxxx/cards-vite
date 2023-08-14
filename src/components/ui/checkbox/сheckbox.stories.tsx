import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { Checkbox } from './checkbox'

export default {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
} as Meta<typeof Checkbox>

export const CheckboxName = {
  render() {
    const [check, setCheck] = useState(false)
    const onChangeHandler = () => {
      setCheck(prev => !prev)
    }

    return <Checkbox onChange={onChangeHandler} checked={check} label={'Click here'} />
  },
}
export const CheckboxNoName = {
  render() {
    const [check, setCheck] = useState(false)
    const onChangeHandler = () => {
      setCheck(prev => !prev)
    }

    return <Checkbox onChange={onChangeHandler} checked={check} />
  },
}

export const Disabled = {
  render() {
    return <Checkbox onChange={() => {}} checked={true} disabled={true} label={'Click here'} />
  },
}
