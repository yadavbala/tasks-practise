import React, { PropsWithChildren } from 'react'
import { Flexbox } from '../../App'
import { Counter } from '../Counter'
import { Products } from '../Products'



interface Product{
  id:number,
  name:string,
  price:number,
  description?:string,
 
}

interface Props{
  list?:Array<Product>,
  handleCart?:(ele:any)=>void,
  updateTitle:(ele:{name:string,id:number})=>void
}

export const ProductList:React.FC<Props>=(props:Props)=>{
  
   return(
     <Flexbox>
         {
           props.list?.map(ele=>{
                return (
                  <React.Fragment key={ele.id}>
                   <Products name={ele.name} price={ele.price} id={ele.id} handleCart={props.handleCart && props.handleCart} updateTitle={props.updateTitle}>
                  {ele.description}
                
              </Products>
               
                  </React.Fragment>
                )
                
           })
         }
     </Flexbox>
   )
}