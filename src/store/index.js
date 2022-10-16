import { createStore } from 'vuex'
import { data } from '@/store/data'
import natsort from "natsort";


export default createStore({
  state: {
    data,
    selectedSort: '',
    columns: [
      { name: 'Название', value: 'name' },
      { name: 'Количество', value: 'quantity' },
      { name: 'Расстояние', value: 'dist' },
      { name: 'Дата', value: 'date' }
    ],
    avalableSortList: [
      { name: 'Названию', value: 'name' },
      { name: 'Количеству', value: 'quantity' },
      { name: 'Расстоянию', value: 'dist' }
    ],
    filterColumn: '',
    filterConditions: [
      { name: 'Равно', value: 'equals' },
      { name: 'Больше', value: 'more' },
      { name: 'Меньше', value: 'less' },
      { name: 'Содержит', value: 'contains' },
    ],
    filterConditionsValue: '',
    filterValue: ''
  },
  getters: {
    data(state, getters) {
      const sorter = natsort();
      return getters.filterData.sort((a, b) => {
        return sorter(a[state.selectedSort], b[state.selectedSort])
      })
    },
    filterData(state) {
      const newData = [...state.data]
      switch (state.filterConditionsValue) {
        case 'contains':
          return newData.filter((item) => {
            return item[state.filterColumn]?.toLowerCase().includes(state.filterValue?.toLowerCase())
          })
        case 'equals':
          return newData.filter((item) => {
            return item[state.filterColumn]?.toLowerCase() === state.filterValue?.toLowerCase()
          })
        case 'more':
          return newData.filter((item) => {
            let res = false
            if (state.filterColumn === 'dist' || state.filterColumn === 'quantity') {
              res = getNumbers(item[state.filterColumn], state.filterValue)
            }
            if (state.filterColumn === 'date') {
              res = getDate(item[state.filterColumn], state.filterValue)
            }
            if (res) {
              return res.value1 > res.value2
            }
          })
        case 'less':
          return newData.filter((item) => {
            let res = false
            if (state.filterColumn === 'dist' || state.filterColumn === 'quantity') {
              res = getNumbers(item[state.filterColumn], state.filterValue)
            }
            if (state.filterColumn === 'date') {
              res = getDate(item[state.filterColumn], state.filterValue)
            }
            if (res) {
              return res.value1 < res.value2
            }
          })
      }
      return state.data
    },
  },
  mutations: {
    updateSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },
    updateFilterColumn(state, filterColumn) {
      state.filterColumn = filterColumn
    },
    updateFilterConditionsValue(state, filterConditionsValue) {
      state.filterConditionsValue = filterConditionsValue
    },
    updateFilterValue(state, filterValue) {
      state.filterValue = filterValue
    },
    cancelFilter(state) {
      state.filterValue = ''
      state.filterConditionsValue = ''
      state.filterColumn = ''
    }
  }
})

function getNumbers(value1, value2) {
  const number1 = Number(value1)
  const number2 = Number(value2)
  if (!isNaN(number1) || !isNaN(number2)) {
    return { value1: number1, value2: number2 }
  }
  return false
}

function getDate(value1, value2) {
  const date1 = new Date(value1).getTime()
  const date2 = new Date(value2).getTime()
  if (!isNaN(date1) || !isNaN(date2)) {
    return { value1: date1, value2: date2 }
  }
  return false
}