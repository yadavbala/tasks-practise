//number methods
//in js there are number methods and numbers of type numbers

//converts number to string
//toString
const n=567

const res=n.toString()
const res1=String(n)
const res2=''+n

console.log(res,typeof res)
console.log(res1,typeof res1)
console.log(res2,typeof res2)

//to exponential-converts number to exponential format as string

const l=123

console.log('exponential',l.toExponential(2))//parameter is optional

//tofixed-returns num as astring with fixed decimals

const sample=234.567

console.log('fixed',sample.toFixed(2))

//toprecision-returns a string, with a number written with a specified length

const ele=125.6743

console.log('precision',ele.toPrecision(4))

//valueof - returns number as number

//mainly to convert string of num to a number there are 3 js global methods

const number='345.5'

console.log('number',Number(number))
console.log(Number("10,33"))       // returns NaN
console.log(Number("10 33"))       // returns NaN
console.log(Number("John"))       // returns NaN

console.log(Number(new Date()))//milliseconds from 1970

//parseInt

console.log(parseInt('10 20'))
console.log(parseInt('25.876'))
console.log(parseInt("years 10"))//NaN

//parseFloat
console.log(parseFloat('10 20'))
console.log(parseFloat('25.876'))
console.log(parseFloat("years 10"))//NaN

//properties in js

console.log(Number.MIN_VALUE)//returns the lowest possible number in JavaScript.
console.log(Number.MAX_VALUE)//returns the largest possible number in JavaScript.
console.log(Number.POSITIVE_INFINITY,1/0)
console.log(Number.NEGATIVE_INFINITY,-1/0)
console.log('maxsafe',Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.NaN,'apple'/10)

console.log('10'+20)//1020
console.log('10'==10)//true
console.log('10'===10)//false
console.log('10'/2)//5 implicit conversion


//typeof nan and infinity both are numbers

const infi=10/0, nan='apple'/10
console.log(Number.isFinite(infi))//false
console.log(Number.isNaN(nan))//true

//es6 number methods

console.log(Number.isInteger(true))//checks for integer

console.log(Number.isSafeInteger(Math.pow(2,53)))//checks for safe integer

//MATH methods

//math object consists of props and methods
console.log(Math.PI)
console.log(Math.round(12.6))
console.log(Math.pow(2,4))
console.log(Math.sqrt(4))
console.log(Math.abs(-6))
console.log(Math.ceil(2.3))
console.log(Math.floor(4.7))
console.log(Math.min(...[2,3,4,5]),Math.max(3,5,6,8))
console.log(Math.round(Math.random()*10))//0 to 9
console.log(Math.sign(55))
console.log(Math.trunc(5.6))//removes decimal part
console.log(Math.exp(56))
