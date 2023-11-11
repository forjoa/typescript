/* Arrays */

// We can assing a common type for all the items from an array
const languages: string[] = []
// Second option: const languages: Array<string> = []

languages.push('Typescript') // ✅
// ❌ languages.push(2)

// If we want an array of different types
const array: (string | number)[] = []

array.push('hello') // ✅
array.push(20) // ✅

// Noughts and crosses
type CellValue = 'X' | 'O' | ''
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', '', 'O'],
]
