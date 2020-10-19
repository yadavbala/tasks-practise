///arrays are number indexed, ordered, collection of values


const arr=[3,5,6,7]
const arr1=new Array('banana','kiwi','mango')

console.log(arr,arr.length)

arr[2]=8

console.log(arr1[2])

console.log(Array.isArray(arr))

//convert arr to strings

const fruits=['apple','banana','mango','kiwi']

console.log(fruits.toString())

console.log(fruits.join(' * '))

//pop
//The pop() method removes the last element from an array.The pop() method returns the value that was "popped out":

console.log(fruits.pop(),fruits)

//push
//The push() method adds a new element to an array (at the end).The push() method returns the new array length

console.log(fruits.push('orange','pinapple'),fruits)

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
console.log(fruits.shift(),fruits)

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

console.log(fruits.unshift('lemon','coconut'),fruits)

//console.log(delete fruits[0],fruits)//not use this

//splice
//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
console.log(fruits.splice(1,2),fruits)

console.log(fruits.splice(2,2,'hello','hi'),fruits)

//The splice() method can be used to add new items to an array:
console.log(fruits.splice(1,0,'coconut','banana'),fruits)

//concat
//The concat() method creates a new array by merging (concatenating) existing arrays:

console.log(fruits.concat(['pomagrante','strawberry']),fruits)

//slice

console.log(fruits.slice(1,4),fruits)

console.log(fruits.slice(4))

console.log(fruits.slice(-2,-1))

console.log(fruits.slice(-2))


console.log(fruits)

//applicable of array of strings
//sort

console.log(fruits.sort(),fruits)

//reverse

console.log(fruits.reverse(),fruits)

//numeric sort

const num2=[3,5,9,8,2]

console.log(num.fill('h'))

console.log(num2.sort((a,b)=>a-b))

console.log(num2.sort((a,b)=>b-a))

//Math.max on array

console.log(Math.max.apply(null,num2))

console.log(Math.min.apply(null,num2))

const obj={name:'bala'}
function sample(...arr){
    console.log('value is',arr)
   return `my name is ${this.name}`
}

console.log(sample.apply(obj,[2,3,4,5]))

console.log(sample.call(obj,2,3,4,5))

const newFunc=sample.bind(obj,2,3,4,5)

console.log(newFunc())

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  console.log(cars.sort((a,b)=>a.year-b.year))

  console.log(cars.sort((a,b)=>b.year-a.year))