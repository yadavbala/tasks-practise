import React from 'react'
import styled, { css } from 'styled-components'

interface Props{
    disabled?:boolean,
    hasError?:boolean
}

const InputContainer=styled.input<{disabled?:boolean,hasError?:boolean}>`
   width:250px;
   padding:13px;
   border:1px solid #ddd;
  ${(props)=>props.hasError && css`
       border:1px solid #ff0000;
       background:#fff;
       color:#fff;
  `}

  ${(props)=>props.disabled && css`
     border:1px solid #ddd;
     background:#ccc;
  `}
`

export const StyledInput:React.FC<Props>=(props:Props)=>{
    return(
        <div>
           <InputContainer type='text' disabled={props.disabled} hasError={props.hasError} />
        </div>
    )
}