import { FC } from 'react'

import { Trash } from '../../../assets/icons'
import { Button, Slider, Tabs, TabsItemsType, TextField, Typography } from '../../../components'

import s from './sortingComponent.module.scss'

type SortingComponentProps = {
  titlePage: string
  searchByName: string
  maxCardsCount: number
  tabActive: TabsItemsType
  optionsTabs: TabsItemsType[]
  sliderValue: [number, number]
  onSearch: (valueSearch: string) => void
  onTabsItem: (tab: TabsItemsType) => void
  onSliderChange: (value: [number, number]) => void
  onAddNew: () => void
  onClearFilter: () => void
}

export const SortingComponent: FC<SortingComponentProps> = ({
  titlePage,
  searchByName,
  tabActive,
  optionsTabs,
  sliderValue,
  maxCardsCount,
  onSearch,
  onTabsItem,
  onSliderChange,
  onClearFilter,
  onAddNew,
}) => {
  return (
    <div className={s.root}>
      <div className={s.containerHead}>
        <Typography as={'h3'} variant={'large'}>
          {titlePage}
        </Typography>

        <Button variant={'primary'} onClick={onAddNew}>
          Add New Pack
        </Button>
      </div>

      <div className={s.containerSorting}>
        <TextField
          value={searchByName}
          placeholder={'Input search'}
          type={'search'}
          onValueChange={onSearch}
          className={s.search}
        />

        <div className={s.containerTabs}>
          <Typography as={'span'} variant={'body2'}>
            Show packs cards
          </Typography>

          <Tabs
            items={optionsTabs}
            onClick={onTabsItem}
            activeButton={tabActive}
            className={s.tabs}
          />
        </div>

        <div className={s.containerSlider}>
          <Typography as={'span'} variant={'body2'}>
            Number of cards
          </Typography>

          <Slider value={sliderValue} max={maxCardsCount} onValueChange={onSliderChange} />
        </div>
        <Button onClick={onClearFilter}>
          <Trash /> Clear Filter
        </Button>
      </div>
    </div>
  )
}
