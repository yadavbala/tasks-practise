import React,{useState} from 'react'

interface Props{
  name:string,
  age?:number,
  withBorder?:boolean
}


export const Personal:React.FC<Props>=(props:Props)=>{
  const [display,setdisplay]=useState<boolean>(true)
  const handleToggle=()=>{
    if(props.age && props.age>30){
       setdisplay(disp=>!disp)
    }
  }
  return(
    <div>
        <h1>Personal info</h1>
        {
          display&&
          <>
            <h1 style={{border:props.withBorder?'1px solid red':''}}>Name:{props.name}</h1>
            {props.age&&<h5>Age:{props.age}</h5>}
          </>
        }
        <div>
          <button onClick={handleToggle}>toggle</button>
        </div>
    </div>
  )
}