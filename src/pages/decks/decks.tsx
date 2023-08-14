import { useEffect } from 'react'

import { useDebounce } from '../../common/hooks/useDebounce'
import { Page, Pagination, SortType, TabsItemsType } from '../../components'
import { useGetDecksQuery } from '../../services/decks/decks'
import {
  decksSliceActions,
  selectCurrentPage,
  selectItemsPerPage,
  selectOrderBy,
  selectSearchByName,
  selectSliderValue,
  selectTabActive,
} from '../../store/decksSlice/decks.slice'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { SortingComponent } from '../components/sortingComponent'

import { TableDecks } from './tableDecks'

const DEFAULT_CARDS_COUNT = 10

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

  const isAllPack = tabActive.key === 'all'

  const { data: decks, isSuccess } = useGetDecksQuery({
    minCardsCount: sliderValue[0],
    maxCardsCount: sliderValue[1],
    name: debounceText,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    orderBy: orderByRow,
  })

  const onClearFilter = () => {
    setTabActive(optionsTabs[1])
    setSliderValue([0, decks?.maxCardsCount || DEFAULT_CARDS_COUNT])
    setSearchByName('')
  }

  useEffect(() => {
    if (sliderValue[1] !== decks?.maxCardsCount) {
      setSliderValue([sliderValue[0], decks?.maxCardsCount || DEFAULT_CARDS_COUNT])
    }
  }, [decks?.maxCardsCount])

  return (
    <>
      <Page>
        {isSuccess && (
          <>
            <SortingComponent
              titlePage={' Packs List'}
              maxCardsCount={decks?.maxCardsCount || DEFAULT_CARDS_COUNT}
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

            <TableDecks
              orderBy={orderBy}
              decksItems={decks?.items}
              setOrderBy={setOrderBy}
              isAllPack={isAllPack}
            />

            <Pagination
              count={decks?.pagination.totalPages || itemsPerPage}
              page={decks?.pagination?.currentPage || currentPage}
              onChange={setCurrentPage}
              onPerPageChange={setItemsPerPage}
              perPage={decks?.pagination.itemsPerPage}
              perPageOptions={[4, 7, 10]}
            />
          </>
        )}
      </Page>
    </>
  )
}

const optionsTabs: TabsItemsType[] = [
  { key: 'my', label: 'My Cards' },
  { key: 'all', label: 'All Cards' },
]
