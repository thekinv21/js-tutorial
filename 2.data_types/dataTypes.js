// JavaScript data types

// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Object
// 7. Symbol
// 8. BigInt

// 1. Number example

let num = 10

// 2. String example

let str = 'Hello World'

// 3. Boolean example

let bool = true

// 4. Undefined example

let und = undefined

// 5. Null example

let nul = null

// 6. Object example

let obj = {
	name: 'John',
	age: 30,
}

// 7. Symbol example

let sym = Symbol('foo')

// 8. BigInt example

let bigInt = 1234567890123456789012345678901234567890n

typeof 'John' // Returns string
typeof ('John' + 'Doe') // Returns string
typeof 3.14 // Returns number
typeof 33 // Returns number
typeof (33 + 66) // Returns number
typeof true // Returns boolean
typeof false // Returns boolean
typeof 1234n // Returns bigint
typeof Symbol() // Returns symbol
typeof x // Returns undefined
typeof null // Returns object

console.log('====================================')

console.log('null == undefined', null == undefined) // Returns true
console.log('null === undefined', null === undefined) // Returns false

// when comparing a string with a number, JavaScript will convert the string to a number when doing the comparison

console.log("'5' == 5", '5' == 5) // Returns true
console.log('5' === 5) // Returns false here because the types are different

console.log('undefined == 0', undefined == 0) // Returns false
console.log('undefined === 0', undefined === 0) // Returns false

console.log('null == 0', null == 0) // Returns false
console.log('null === 0', null === 0) // Returns false

console.log('null == false', null == false) // Returns false

console.log('undefined == false', undefined == false) // Returns false
