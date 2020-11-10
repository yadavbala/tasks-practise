import React, { useEffect, useRef, useState } from 'react'

interface Props{
    type:'text'|'number'|'password',
    initialval?:string,
    onValueChange?:(val:string)=>void
}
//export const testInputId='input-value'

export const InputComponent:React.FC<Props>=(props:Props)=>{
    const [username,setusername]=useState<string>(props?.initialval||'')

    

    const inpRef=useRef() as React.RefObject<HTMLInputElement>

   /* useEffect(()=>{
      if(inpRef && inpRef.current){
          console.log(inpRef.current)
          setusername(inpRef.current.value)
      }
    },[])*/

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
          setusername(event.target.value)
          props.onValueChange?.(event.target.value)
    }
  return(
      <div>
         <input data-testid='input-value' type={props.type} value={username} ref={inpRef} onChange={handleChange}/> 
      </div>
  )
}