
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

const products = [
    {
      name: 'product 1',
      description: 'product 1',
      price: 5
    },
    {
      name: 'product 2',
      description: 'product 1',
      price: 7
    },
    {
      name: 'product 3',
      description: 'product 3',
      price: 10
    },
    {
      name: 'product 4',
      description: 'product 1',
      price: 10
    }
  ];

  /*(products||[]).forEach(({name,description})=>{
      console.log(`${name} ${description}`)
  })*/

  (products||[]).forEach(product=>{
      if(product.price>7){
          product.rating=5
      }else{
          product.rating=3
      }
  })

  console.log(products)

  const fiveStarProducts = products.find(product => product.rating === '5 stars');
//  fiveStarProducts[0].price = 100;

const productWithPriceTen = products.find(product => product.price === 10);

if (productWithPriceTen) {
  productWithPriceTen.price = 100;
  productWithPriceTen.name = ' i have changed the name';
}
console.log('product with price ten', products);

const newmap=(products||[]).map(product=>{
    return product.name
})

console.log(newmap)


//hre we are returning obj to arr via map
const productNames = (products || []).map(({name, price}) => {
    const rating = price > 5 ? '5 stars' : '3 stars';
    return {name, rating, price};
  });

  console.log(productNames)