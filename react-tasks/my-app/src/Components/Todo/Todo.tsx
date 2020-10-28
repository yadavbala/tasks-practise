import React, { useState } from 'react'

export const Todo:React.FC=()=>{
    const [todo,settodo]=useState<string>('')
    const [errortodo,seterrortodo]=useState<boolean>(false)
    const [resultArr,setResultArray] =useState<Array<string>>([])
    const [months]=useState<Array<string>>(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'])
    //console.log(todo)
    const handleTodoChange=(event:React.ChangeEvent<HTMLInputElement>):void=>{
         settodo(event.target.value)
    }

    const removeList=(ele:string):void=>{
        const newList=resultArr.filter(todo=>todo!=ele)
        setResultArray(newList)
    }

   const handleSubmit=(event:React.SyntheticEvent):void=>{
            event.preventDefault()
            todo.length===0 ?seterrortodo(true):seterrortodo(false)
            if(todo.length>=10){
                setResultArray([...resultArr,todo])
            }
    }

  return(
      <div>
            <h3>Hello {localStorage.getItem('username')}</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' value={todo} minLength={10} onChange={(event)=>handleTodoChange(event)}/>
                <button type='submit'>submit</button>
                {errortodo&&<p style={{color:'red',fontSize:'14px'}}>Todo field is required</p>}
            </form>
            <ul style={{listStyleType:'none'}}>
            {
                resultArr.map((ele,i)=>{
                return (
                    <div>
                      <li key={i} onDoubleClick={()=>removeList(ele)} style={{border:'1px solid #eee',padding:'8px 15px',display:'inline-flex'}}>{`${++i} ${ele}\u00A0\u00A0\u00A0\u00A0${new Date().getDate()} ${months[new Date().getMonth()]}`}</li>
                    </div>
                 )
                })
               
            }
            </ul>
      </div>
  )
}