import { memo } from 'react'

import { usePagination } from '../../../common/hooks/usePagination'

import { ControlButton } from './controlButton/controlButton'
import { MainPaginationButtons } from './mainPaginationButtons/mainPaginationButtons'
import s from './pagination.module.scss'
import { PerPageSelect } from './perPageSelect/perPageSelect'

type PaginationPropsType = {
  count: number
  page: number
  onChange: (page: number) => void
  siblings?: number
  perPage?: number // no perPage, no select
  perPageOptions?: number[] // array points in elect
  onPerPageChange?: (itemPerPage: string) => void // change from number
}

export const Pagination = memo(
  ({
    count,
    page,
    perPage,
    onChange,
    siblings,
    perPageOptions,
    onPerPageChange,
  }: PaginationPropsType) => {
    const {
      paginationRange,
      isLastPage,
      isFirstPage,
      handlePreviousPageClicked,
      handleNextPageClicked,
      handleMainPageClicked,
    } = usePagination({
      page,
      count,
      onChange,
      siblings,
    })
    const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

    return (
      <div className={s.main}>
        <div className={s.numbers}>
          <ControlButton
            direction={'left'}
            onClick={handlePreviousPageClicked}
            disabled={isFirstPage}
          />
          <MainPaginationButtons
            currentPage={page}
            onClick={handleMainPageClicked}
            paginationRange={paginationRange}
          />
          <ControlButton
            direction={'right'}
            onClick={handleNextPageClicked}
            disabled={isLastPage}
          />
        </div>
        {showPerPageSelect && (
          <PerPageSelect
            {...{
              perPage,
              perPageOptions,
              onPerPageChange,
            }}
          />
        )}
      </div>
    )
  }
)
