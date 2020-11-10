import React,{useState} from 'react'

export const Counter:React.FC=()=>{
    const [count,setcount]=useState<number>(0)
     return(
         <div>
             <h1>Counter-<div data-testid={'counter-value'}>{count}</div></h1>
             <div>
                 <button onClick={()=>setcount(val=>++val)} data-testid={'increment'}>increment count</button>
             </div>
             <div>
                 <button onClick={()=>setcount(val=>--val)} data-testid={'decrement'}>decrement count</button>
             </div>
             <div>
                 <button onClick={()=>setcount(0)} data-testid={'reset'}>reset</button>
             </div>
         </div>
     )
}