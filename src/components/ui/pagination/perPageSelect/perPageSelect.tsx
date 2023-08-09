import { Select } from '../../select'

import s from './perPageSelect.module.scss'

export type PerPageSelectProps = {
  perPage: number
  perPageOptions: number[]
  onPerPageChange: (itemPerPage: string) => void
}

export const PerPageSelect = ({ perPage, perPageOptions, onPerPageChange }: PerPageSelectProps) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value.toString(),
    value: value.toString(),
  }))

  return (
    <div className={s.selectBox}>
      <Select
        value={perPage.toString()}
        dataSelect={selectOptions}
        onValueChange={onPerPageChange}
      />
    </div>
  )
}
