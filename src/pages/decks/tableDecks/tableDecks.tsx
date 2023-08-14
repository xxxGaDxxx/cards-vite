import { FC } from 'react'

import { Edit, PlayCircle, Trash } from '../../../assets/icons'
import { Button, ColumnType, SortType, Table } from '../../../components'
import { Deck } from '../../../services/decks/types'

import s from './tableDecks.module.scss'

type TableDecksProps = {
  decksItems: Deck[]
  setOrderBy: (sort: SortType) => void
  orderBy: SortType
  isAllPack: boolean
}
export const TableDecks: FC<TableDecksProps> = ({ decksItems, setOrderBy, orderBy, isAllPack }) => {
  return (
    <div className={s.container}>
      <Table.Root style={{ width: '100%' }}>
        <Table.Header columns={columns} onSort={setOrderBy} sort={orderBy} />
        <Table.Body>
          {decksItems &&
            decksItems.map(deck => (
              <Table.Row key={deck?.id}>
                <Table.Cell>
                  <Button variant={'link'} className={s.button}>
                    {deck?.name}
                  </Button>
                </Table.Cell>
                <Table.Cell>{deck.cardsCount}</Table.Cell>
                <Table.Cell>{new Date(deck.updated).toLocaleDateString('en-GB')}</Table.Cell>
                <Table.Cell>{deck?.author.name}</Table.Cell>
                {/*TODO открытие модалки или переход на изучение*/}
                {isAllPack ? (
                  <Table.Cell className={s.containerIcon}>
                    <Button variant={'link'}>
                      <PlayCircle />
                    </Button>
                  </Table.Cell>
                ) : (
                  <Table.Cell className={s.containerIcon}>
                    <Button variant={'link'} className={s.buttonIcon}>
                      <PlayCircle />
                    </Button>
                    <Button variant={'link'} className={s.buttonIcon}>
                      <Edit />
                    </Button>
                    <Button variant={'link'}>
                      <Trash />
                    </Button>
                  </Table.Cell>
                )}
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

const columns: ColumnType[] = [
  {
    key: 'name',
    title: 'Name',
    sortable: true,
  },
  {
    key: 'cardsCount',
    title: 'Cards',
    sortable: true,
  },
  {
    key: 'updated',
    title: 'Last Updated',
    sortable: true,
  },
  {
    key: 'created',
    title: 'Created by',
    sortable: true,
  },
  {
    key: 'options',
    title: '',
  },
]
