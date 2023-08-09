import { clsx } from 'clsx'

import { Typography } from '../../typography'

import s from './pageButton.module.scss'

type PageButtonProps = {
  onClick: () => void
  disabled?: boolean
  page: number
  selected: boolean
}

export const PageButton = ({ onClick, disabled, selected, page }: PageButtonProps) => {
  const classNames = {
    item: s.item,
    pageButton(selected?: boolean) {
      return clsx(this.item, selected && s.selected)
    },
  }

  return (
    <button
      onClick={onClick}
      disabled={selected || disabled}
      className={classNames.pageButton(selected)}
    >
      <Typography className={s.text} variant="body2">
        {page}
      </Typography>
    </button>
  )
}
