
function* lazyfunction(){
    let a=5,b=4

    yield a+b
    yield a-b
    yield a*b
    return a
}

const generator=lazyfunction()

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

function* lazyproducts(){
    let products=[]

    for(let i=1;i<=500;i++){
        products.push({id:i,name:`product ${i}`})
    }

    yield products.slice(0,99)
    yield products.slice(100,199)
    yield products.slice(200,399)
    return products.slice(400,499)
}

const genProduct=lazyproducts()

console.log(genProduct.next().value)
console.log(genProduct.next().value)
console.log(genProduct.next().value)
console.log(genProduct.next().value)

