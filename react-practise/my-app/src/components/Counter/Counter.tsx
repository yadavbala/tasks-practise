import React,{useState} from 'react'

export const Counter:React.FC=()=>{
    const [count,setcount]=useState<number>(0)
     return(
         <div>
             <h1>Counter-{count}</h1>
             <div>
                 <button onClick={()=>setcount(val=>++val)}>increment count</button>
             </div>
             <div>
                 <button onClick={()=>count>0&&setcount(val=>--val)}>decrement count</button>
             </div>
             <div>
                 <button onClick={()=>setcount(0)}>reset</button>
             </div>
         </div>
     )
}