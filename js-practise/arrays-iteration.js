
const arr=[3,6,8,4,10]

//also use for of

for(const key of arr){
    console.log(key)
}

//foreach
(arr||[]).forEach((ele,i,arr)=>{
    console.log(ele,i)
}) //best to use []

//map

const d=arr.map(ele=>ele+2)
console.log(d,arr)

//filter

const e=arr.filter(ele=>ele>4)
console.log(e,arr)

//reduce

const f=arr.reduce((total,ele)=>total+ele,0)

console.log(f,arr)

//reduceright

const g=arr.reduceRight((total,ele)=>total+ele,0)
console.log(g,arr)

//every

const h=arr.every(ele=>ele>10)
console.log(h)

//some
const some=arr.some(ele=>ele>=10)
console.log(some)

//indexOf
console.log(arr.indexOf(10))

console.log(arr.lastIndexOf(10))

console.log(arr.includes(10))

//find

const finding=arr.find(ele=>ele>6)
console.log(finding)


//findIndex

const sample=arr.findIndex(ele=>ele>8)
console.log(sample)