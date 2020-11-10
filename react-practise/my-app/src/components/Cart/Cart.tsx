import React, { useEffect } from 'react'

interface Props{
    count:Array<any>,
    data?:number,
    displayAll?:boolean
}

export const Cart:React.FC<Props>=(props:Props)=>{
    useEffect(()=>{
        console.log('useeffect subscribed')
        return (()=>{
            console.log('UNSUBSCRIBED')
        })

    },[props.data])

    /*

    executes on comp mounts
    to exec only once pass []
    to exec on props change pass props
    */
  return(
      <div style={{position:'absolute',top:'5px',right:'5px',border:'1px solid #ccc',boxShadow:'1px 1px 1px 1px #ddd',background:'purple',minWidth:'200px'}}>
          {
              props.displayAll &&(
                  <p>name-price-quantity</p>
              )
          }
          {
              !props.displayAll &&(
              <h1>Products</h1>
              )
          }
          <h1>Cart-{props.count?.length}</h1>
          {
              props.count?.map((ele,i)=>{
              return <p key={i}>{ele.name}-{ele.price}-{ele.quantity}</p>
              })
          }
      </div>
  )
}