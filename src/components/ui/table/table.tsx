import { ComponentProps, FC } from 'react'

import { clsx } from 'clsx'

import { Arrow } from '../../../assets/icons'

import s from './table.module.scss'

type RootType = ComponentProps<'table'>

const Root: FC<RootType> = ({ className, ...restProps }) => {
  return <table className={clsx(className, s.table)} {...restProps} />
}

type TheadType = ComponentProps<'thead'>

const Thead: FC<TheadType> = ({ ...restProps }) => {
  return <thead {...restProps} />
}

export type RowType = ComponentProps<'tr'>

export const Row: FC<RowType> = props => {
  return <tr {...props} />
}

export type HeadCellType = ComponentProps<'th'> & {
  sortable?: boolean
}

export const HeadCell: FC<HeadCellType> = ({ className, children, sortable, ...rest }) => {
  return (
    <th className={clsx(className, s.headCell, sortable && s.sortable)} {...rest}>
      <span>{children}</span>
    </th>
  )
}

export type ColumnType = {
  key: string
  title: string
  sortable?: boolean
}

export type SortType = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const Header: FC<
  Omit<
    TheadType & {
      columns: ColumnType[]
      sort?: SortType
      onSort?: (sort: SortType) => void
    },
    'children'
  >
> = ({ columns, sort, onSort, ...restProps }) => {
  const chevron = sort?.direction === 'desc' ? s.chevronDown : ''
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) return

    if (sort?.key !== key) return onSort({ key, direction: 'asc' })

    if (sort.direction === 'desc') return onSort(null)

    return onSort({
      key,
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
    })
  }

  return (
    <Thead {...restProps}>
      <Row>
        {columns.map(({ title, key, sortable }) => (
          <HeadCell key={key} onClick={handleSort(key, sortable)}>
            {title}
            {sort && sort.key === key && <Arrow className={chevron} />}
          </HeadCell>
        ))}
      </Row>
    </Thead>
  )
}

export type BodyType = ComponentProps<'tbody'>

export const Body: FC<BodyType> = props => {
  return <tbody {...props} />
}

export type CellType = ComponentProps<'td'>

export const Cell: FC<CellType> = ({ className, ...rest }) => {
  return <td className={clsx(className, s.tableCell)} {...rest} />
}

export const Table = {
  Root,
  Thead,
  Row,
  HeadCell,
  Header,
  Body,
  Cell,
}
