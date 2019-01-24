import { TOGGLE_CELL } from './types'

export default (rowIndex, columnIndex) => ({
  type: TOGGLE_CELL,
  rowIndex,
  columnIndex
})
