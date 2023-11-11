/* Functions */

// When you create a function with parameters, you need to declare the variable type in the function parentesis
function greeting(name: string) {
  console.log(`Hi, ${name}`)
}

greeting('Joaquin') // ✅
// ❌ greeting(18), this is incorrect because you cannot send a Number as a parameter

/* Function with objects as parameters */

// First way to type the object parameter is:
function greetingObjects({ name, age }: { name: string; age: number }) {
  console.log(`Hi, ${name}, you are ${age} years old`)
}

greetingObjects({ name: 'Joaquin', age: 19 }) // ✅

// Second way to type the object parameter is:
function greetingObjects2(person: { name: string; age: number }) {
  // This forces you to take each property in a single variable
  const { name, age } = person
  console.log(`Hi, ${name}, you are ${age} years old`)
}

greetingObjects2({ name: 'Joaquin Dos', age: 19 })

/* Return type in functions */
// To specify the variable type from a return in a function, has to be like this:
function suma(): number {
  return 3 + 3
}

/* Types in callbacks */
// Basically, we have to specify EVERYTHING, starting from the parameters in our callback function and also what they return
// In this case, 'fn' returns void because it is a console.log, but it returns something, we have to specify the type
const sayHiFromFunction = (fn: (name: string) => void) => {
  fn('Joaquin')
}

const sayHi = (name: string) => {
  console.log(`Hi, ${name}`)
}

sayHiFromFunction(sayHi)

/* NEVER: type */
// Only used in throw functions
function throwError(message: string): never {
  throw new Error(message)
}
