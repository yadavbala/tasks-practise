import React,{useState,useRef} from 'react'
import { History, LocationState } from "history";
interface Props{
    history:History<LocationState>
}

export const Login:React.FC<Props>=(props:Props)=>{
    const [username,setusername]=useState<string>('')
    const [password,setpassword]=useState<string>('')
    const [errorUsername,seterrorUsername]=useState<boolean>(false)
    const [errorPassword,seterrorPassword]=useState<boolean>(false)
    
    // use ref element for form
    const formElementRef = useRef() as React.RefObject<HTMLFormElement>;

    const handleUsername=(event:React.ChangeEvent<HTMLInputElement>):void=>{
        console.log(event.target)
        setusername(event.target.value)
    }
    const handlePassword=(event:React.ChangeEvent<HTMLInputElement>):void=>{
        console.log(event.target)
        setpassword(event.target.value)
    }
    const handleSubmit=(event:React.SyntheticEvent):void=>{
           event.preventDefault()
           username.length==0 ? seterrorUsername(true):seterrorUsername(false)
           password.length==0 ? seterrorPassword(true):seterrorPassword(false)
           if(username.length>=3 && password.length>=3){
               localStorage.setItem('username',username)
               localStorage.setItem('password',password)
               props.history.push('/todo')
              // form.reset()
              formElementRef?.current?.reset();
           }
    }
    console.log(username)
    return(
        <div>
           <h1>Login</h1>
           <form autoComplete='on' id='my-form' onSubmit={handleSubmit} ref={formElementRef}>
               <label htmlFor='username'>username</label>
               <input type='text' value={username} id='username' style={{border:errorUsername?'1px solid red':''}}  minLength={3} onChange={(event)=>handleUsername(event)}/>
               {errorUsername && <p style={{color:'red',fontSize:'14px'}}>username is required</p>}
               <br/><br/>
               <label htmlFor='password'>password</label>
               <input type='text' value={password} id='password' minLength={3} style={{border:errorPassword?'1px solid red':''}} onChange={(event)=>handlePassword(event)}/>
               {errorPassword && <p style={{color:'red',fontSize:'14px'}}>password is required</p>}
               <br/><br/>
               <button type='submit'>submit</button>
           </form>
        </div>
    )
}