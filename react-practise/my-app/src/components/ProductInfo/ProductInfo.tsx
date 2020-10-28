//import React from 'react'

export const ProductInfo=[{
    id:1,
    name:'pen',
    price:30,
    description:'this is a pen'
},
{
    id:2,
    name:'pencil',
    price:50,
    description:'this is a pencil'
},
{
    id:3,
    name:'scale',
    price:20,
    description:'this is a scale'
}
]

export interface ISeller{
    name:string,
    product:string,
    rating:number,
    updaterating:(rating:number)=>void
}


export const sellerInfo:ISeller={
    name:'seller',
    product:'bisleri',
    rating:4,
    updaterating:(rating:number)=>{
        sellerInfo.rating=rating
    }
}