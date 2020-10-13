const str='hello'


//access a char
console.log(str[0])
//uppercase
console.log(str.toUpperCase())

//lowercase
console.log(str.toLowerCase())

//charAt
console.log(str.charAt(0))

//indexOf
console.log(str.indexOf('e'))
console.log(str.indexOf('z'))
//lastIndexOf
console.log(str.lastIndexOf('l'))

//includes
console.log(str.includes('e'))

//slice
console.log(str.slice(0,3))
console.log(str.slice(3))

//substr
console.log(str.substr(1,3))

//search
console.log(str.search('ell'))

//replace
console.log(str.replace('el','his'))

//split
console.log(str.split(''))
//console.log(str.split(' '))

//repeat
console.log(str.repeat(2))

//charCodeAt
console.log(str.charCodeAt(0))

//concat
const c='world'

console.log(str.concat(c))

//trim
const d=' hi '
console.log(d.trim())

//property

console.log(str.length)

