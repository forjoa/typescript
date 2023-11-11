/* Variable types */

// string
const person: string = 'Joaquin'
// number
const age: number = 18
// boolean
let studient: boolean = true
// null
const parentName = null
// undefined
const gender = undefined

// Now we can't change de type of those values 
// studient = 'No'
// This'll throw an error saying that it can't assign a 'string' in a boolean variable

// ANY: let's say we have a variable without value
let a
// At this point this variable has type 'any' which means that you can assing any type of value to 'a'
// IMPORTANT: be careful when you use this, because basically what you are saying is that it has to be ignored the type rules from Typescript
let b: any = 'hola'
b = 18
// No error

// Inference
const num = 3
const num2 = 6
const num3 = num + num2
// 'num' and 'num2' are Number because Typescript inferred their type, therefore 'num3' will be Number too

