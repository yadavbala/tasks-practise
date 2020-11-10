import React, { PropsWithChildren, useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { SellerContext } from '../../App'
import { Buttonbase } from '../Button'
import { ISeller } from '../ProductInfo/ProductInfo'

const ProductsContainer=styled.div`
float:left;
min-width:150px;
margin:5px;
border:1px solid #ccc;
box-shadow:1px 1px 1px outset #eee;
padding:5px 15px;
`

interface Props{
   name:string,
   id:number,
   price:number,
   description?:string,
   handleCart?:(ele:any)=>void,
   updateTitle:(ele:{name:string,id:number})=>void
}

export const Products:React.FC<Props>=(props:PropsWithChildren<Props>)=>{
    const [quantity,setquantity]=useState<number>(1)
    const [edit,isedit]=useState<boolean>(false)
    const [newval,setval]=useState<string>(props.name)
    const sellerInfo=useContext<ISeller>(SellerContext)
    const [ratingstatus1,editrating]=useState<boolean>(true)
    const [ratingval,updateratingval]=useState<number>(1)
   
    const quantityref=useRef() as React.RefObject<HTMLInputElement>

    const handlenewvalue=(event:React.ChangeEvent<HTMLInputElement>):void=>{
           setval(event.target.value)
    }

    const handleQuantity=(event:React.ChangeEvent<HTMLInputElement>):void=>{
             setquantity(+event.target.value)
    }

    const ratingstatus=():void=>{
        editrating(false)
    }

    const handleRating=(event:React.ChangeEvent<HTMLInputElement>):void=>{
          updateratingval(+event.target.value)
    }

    const toggleRating=():void=>{
       editrating(true)
       sellerInfo?.updaterating(ratingval)
    }

    useEffect(()=>{
           console.log(quantityref.current?.value)
    },[quantity])

    const handleUpdate=()=>{
        isedit(false)
        const info={
            id:props.id,
            name:newval
        }
        props.updateTitle(info)
    }

    const handleEdit=()=>{
        isedit(true)
        
    }
    const addCart=()=>{
        props.handleCart?.({
            id:props.id,
            name:props.name,
            price:props.price,
            quantity
        })
    } 

    console.log('seller info',sellerInfo)
    return(
        <ProductsContainer>
                
                    {!edit &&<h1 onDoubleClick={handleEdit}>{newval}</h1>}
                    {
                        edit&&
                        <>
                        <input type='text' value={newval} onChange={handlenewvalue}/>
                        <button onClick={handleUpdate}>update</button>
                        </>
                    }
                    <h3>{props.price}</h3>
                    <div>{props.children}</div>
                <h1>name:{sellerInfo.name}</h1>
                {ratingstatus1&&<div onClick={ratingstatus}>rating:{sellerInfo.rating}</div>}
                {!ratingstatus1 &&(
                    <>
                    <input type='number' min='1' max='5' value={ratingval} onChange={handleRating}/>
                    <button onClick={toggleRating}>updaterating</button>
                    </>
                )}
                    <div>
                       <input type='number' value={quantity} min='1' max='5' onChange={handleQuantity} ref={quantityref}/>
                    </div>
                    <div><Buttonbase onClick={()=>addCart()}>add to cart</Buttonbase></div>       
        </ProductsContainer>
    )
}