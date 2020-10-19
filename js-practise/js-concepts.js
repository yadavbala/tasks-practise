//arrow function

const res=()=>{
    console.log(this)
}

res()

//default params
function isEqual(num,compare=3){
    return num===compare
}

console.log(isEqual(5))

const obj={
    name:'bala',
    age :25,
    "details"(){
        console.log(`${this.name} is ${this.age}`)
    }
}

//rest and spread

function rest(...arr){
 console.log('rest',arr)
}
console.log('rest',rest(1,2,3,4))


console.log(Math.min(...[1,2,3,4]))


//array destructure

const arr=[2,3,4,5]

const[f1,,f3]=arr

const [f4,...f5]=arr //rest of array

console.log(f1,f3,f4,f5)

let a=5,b=10

const [c,d]=[b,a]

console.log(c,d)

//object destructure

const obj1={
    name:'bala',
    designation:'trainee dev',
    address:{
        city:'erode',
        state:'tamilnadu'
    },
    skills:['html','css','js','react']
}

//const {name:name1,designation,address:{city,state},skills,match=true}=obj1

//console.log(name1,designation,city,state,skills,match)

const {name,designation,...rest2}=obj1

console.log(name,designation,rest2)

//map

//keys are ordered

const ace={
    name:'ace'
}

const king={
    name:'king'
}

let deck=new Map()

deck.set('a',ace)

deck.set('k',king)

console.log(deck,deck.size)

console.log(deck.get('a'))

//console.log(deck.delete('k'),deck)

//console.log(deck.clear(),deck)

console.log(deck.keys())

console.log(deck.values())

console.log(deck.entries())

const e=deck.entries()

const f=deck.keys()

for(const key1 of f){
    console.log('key1',key1)
}

for(const key of e){
    console.log('key',key)
}

//set

let set=new Set([1,1,3,4,5])

console.log(set)

console.log(set.keys())

console.log(set.values())

console.log(set.size)

console.log(set.delete(3),set)

console.log(set.entries())

console.log(set.clear(),set)


//map

//keys are ordered



