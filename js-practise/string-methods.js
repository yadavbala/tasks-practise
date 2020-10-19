//strings are primitives but we can apply props and methods they are internally wrapped to objects

const str='hello world'

//length prop- find length of string

console.log(str.length)

console.log("the brand called \"vikings\" so popular")
console.log('the brand is \\ so popular')
console.log(`hello
dolly`)

//methods

//indexOf-returns the index of (the position of) the first occurrence of a specified text in a string
//found pos or returns -1
console.log(str.indexOf('wor'))

//lastIndexOf
//returns the index of the last occurrence of a specified text in a string or returns -1
console.log(str.lastIndexOf('l'))

console.log(str.indexOf('w',2))

console.log(str.lastIndexOf('orl',10))

//search-search() method searches a string for a specified value and returns the position of the match

console.log(str.search('z'))

//slice-slice() extracts a part of a string and returns the extracted part in a new string.

console.log(str.slice(1,3))

console.log(str.slice(4))

console.log(str.slice(-5,-2))//slice neg counted from right to left

console.log(str.slice(-4))

//substring-substring() is similar to slice().The difference is that substring() cannot accept negative indexes.

console.log(str.substring(2,5))

console.log(str.substring(2))

//substr-The difference is that the second parameter specifies the length of the extracted part.

console.log(str.substr(2,3))

console.log(str.substr(2))

console.log(str.substr(-4))

//replace-The replace() method replaces a specified value with another value in a string and replaces only first match and case sensitive

console.log(str.replace('hello','welcome'))

console.log(str.replace('HELLO','welcome'))//does not have any change

console.log(str.replace(/HELLO/i,'welcome'))//regular exp case insensitive search

const str1 = "Please visit Microsoft and Microsoft!";

console.log(str1.replace(/Microsoft/g,'MICROSOFT'))//regular exp global search

//toUpperCase()

console.log(str.toUpperCase())

//toLowerCase()

console.log(str.toLowerCase())

//concat()

console.log(str.concat(' folks'))

//trim()

const str2=' helooo '

console.log(str2.trim())

//to fetch char with index

console.log(str.charAt(4))

console.log(str.charCodeAt(1))

console.log(str[str.length-1])

//repeat string

console.log(str.repeat(3))

//includes

console.log(str.includes('hel'))

//startswith and endswith

//split

console.log(str.split(' '))

console.log(str.split(''))

console.log(str.codePointAt(2))


