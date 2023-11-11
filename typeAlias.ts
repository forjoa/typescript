/* Type alias for objects */

// We are going to create a 'global' type for all our hero objects, we could say that it is like creating a Class
type Hero = {
  readonly id?: string // 'readonly': makes this property unaccesible to changes
  name: string
  age: number
  isActive?: boolean // Optional property, adding a '?' to the property makes it optional
  powerScale?: HeroPowerScale // Union type in line 42
}

// Now we have to strictly follow the skeleton from type Hero
const hero: Hero = {
  name: 'Spidey',
  age: 20,
}

// Example: we have a function to create every hero, now we have to specify the type of the return
function createHero(name: string, age: number): Hero {
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true, // By default, we are making 'isActive' true
  }
}

// Now 'ironman' is type 'Hero'
const ironman = createHero('Iron Man', 35)

// ❌ ironman.id = 1, because it is a read only property

/* Template union types */
// We can assing a type to a variable too
type HexadecimalColor = `#${string}`

// ❌ const color1: HexadecimalColor = '333333'
const color2: HexadecimalColor = '#333333' // ✅

/* Union types */
// The '|' makes ot a multiple type option
type HeroPowerScale =
  | 'local'
  | 'planetary'
  | 'galactic'
  | 'universal'
  | 'multiversal'
ironman.powerScale = 'planetary'
console.log(ironman)

// For example, we could have a variable that could have two types
let ann: number | string
ann = 1 // ✅
ann = 'Hi' // ✅
