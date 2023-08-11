import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SortType, TabsItemsType } from '../../components'
import { RootState } from '../store.ts'

const initialState = {
  itemsPerPage: 7,
  currentPage: 1,
  searchByName: '',
  sliderValue: [0, 10] as [number, number],
  tabActive: { key: 'all', label: 'All Cards' },
  orderBy: null as SortType,
}

export const decksSlice = createSlice({
  name: 'decksSlice',
  initialState: initialState,
  reducers: {
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setSearchByName: (state, action: PayloadAction<string>) => {
      state.searchByName = action.payload
    },
    setSliderValue: (state, action: PayloadAction<[number, number]>) => {
      state.sliderValue = action.payload
    },
    setTabActive: (state, action: PayloadAction<TabsItemsType>) => {
      state.tabActive = action.payload
    },
    setOrderBy: (state, action: PayloadAction<SortType>) => {
      state.orderBy = action.payload
    },
  },
})

export const { actions: decksSliceActions } = decksSlice

export const selectItemsPerPage = (state: RootState) => state.decksSlice.itemsPerPage
export const selectCurrentPage = (state: RootState) => state.decksSlice.currentPage
export const selectSearchByName = (state: RootState) => state.decksSlice.searchByName
export const selectSliderValue = (state: RootState) => state.decksSlice.sliderValue
export const selectTabActive = (state: RootState) => state.decksSlice.tabActive
export const selectOrderBy = (state: RootState) => state.decksSlice.orderBy
