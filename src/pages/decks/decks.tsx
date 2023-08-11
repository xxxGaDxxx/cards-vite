import { useEffect } from 'react'

import { Edit, PlayCircle, Trash } from '../../assets/icons'
import { useDebounce } from '../../common/hooks/useDebounce.tsx'
import { Button, ColumnType, Page, SortType, Table, TabsItemsType } from '../../components'
import { Pagination } from '../../components/ui/pagination'
import { useGetDecksQuery } from '../../services/decks/decks.ts'
import {
  decksSliceActions,
  selectCurrentPage,
  selectItemsPerPage,
  selectOrderBy,
  selectSearchByName,
  selectSliderValue,
  selectTabActive,
} from '../../store/decksSlice/decks.slice.ts'
import { useAppDispatch, useAppSelector } from '../../store/store.ts'
import { SortingComponent } from '../components/sortingComponent'

import s from './decks.module.scss'

export const Decks = () => {
  const dispatch = useAppDispatch()

  const itemsPerPage = useAppSelector(selectItemsPerPage)
  const currentPage = useAppSelector(selectCurrentPage)
  const searchByName = useAppSelector(selectSearchByName)
  const sliderValue = useAppSelector(selectSliderValue)
  const tabActive = useAppSelector(selectTabActive)
  const orderBy = useAppSelector(selectOrderBy)

  const setItemsPerPage = (perPage: string) =>
    dispatch(decksSliceActions.setItemsPerPage(Number(perPage)))
  const setCurrentPage = (page: number) => dispatch(decksSliceActions.setCurrentPage(page))
  const setSearchByName = (valueSearch: string) =>
    dispatch(decksSliceActions.setSearchByName(valueSearch))
  const setSliderValue = (value: [number, number]) =>
    dispatch(decksSliceActions.setSliderValue(value))
  const setTabActive = (tab: TabsItemsType) => dispatch(decksSliceActions.setTabActive(tab))

  const setOrderBy = (sort: SortType) => {
    dispatch(decksSliceActions.setOrderBy(sort))
  }

  //TODO показать мои карточки добавить authorId
  const debounceText = useDebounce<string>({ value: searchByName })

  const orderByRow = orderBy ? `${orderBy.key}-${orderBy.direction}` : ''

  const { data: decks } = useGetDecksQuery({
    minCardsCount: sliderValue[0],
    maxCardsCount: sliderValue[1],
    name: debounceText,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    orderBy: orderByRow,
  })

  const onClearFilter = () => {
    setTabActive(optionsTabs[1])
    setSliderValue([0, decks?.maxCardsCount || 10])
    setSearchByName('')
  }

  useEffect(() => {
    if (sliderValue[1] !== decks?.maxCardsCount) {
      setSliderValue([sliderValue[0], decks?.maxCardsCount || 10])
    }
  }, [decks?.maxCardsCount])

  return (
    <Page>
      <SortingComponent
        titlePage={' Packs List'}
        maxCardsCount={decks?.maxCardsCount || 10}
        optionsTabs={optionsTabs}
        tabActive={tabActive}
        searchByName={searchByName}
        sliderValue={sliderValue}
        onAddNew={() => {}}
        onClearFilter={onClearFilter}
        onSearch={setSearchByName}
        onSliderChange={setSliderValue}
        onTabsItem={setTabActive}
      />
      <div>
        <Table.Root style={{ width: '100%' }}>
          <Table.Header columns={columns} onSort={setOrderBy} sort={orderBy} />
          <Table.Body>
            {decks?.items &&
              decks?.items.map(deck => (
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
                  {tabActive.key === 'all' ? (
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
      <Pagination
        count={decks?.pagination.totalPages || itemsPerPage}
        page={decks?.pagination?.currentPage || currentPage}
        onChange={setCurrentPage}
        onPerPageChange={setItemsPerPage}
        perPage={decks?.pagination.itemsPerPage}
        perPageOptions={[4, 7, 10]}
      />
    </Page>
  )
}

const optionsTabs: TabsItemsType[] = [
  { key: 'my', label: 'My Cards' },
  { key: 'all', label: 'All Cards' },
]

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
