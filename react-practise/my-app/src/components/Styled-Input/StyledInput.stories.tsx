import React from 'react'
import {StyledInput} from './Styled-input'
export default{
    title:'input',
    component:StyledInput
}

export const DefaultInput:React.FC=()=>{
    return(
     <StyledInput/>
    )
  
}

export const DisabledInput:React.FC=()=>{
    return(
     <StyledInput disabled={true}/>
    ) 
}

export const HasErrorInput:React.FC=()=>{
    return(
     <StyledInput hasError={true}/>
    )
}