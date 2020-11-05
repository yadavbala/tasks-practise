import React from 'react'
import styled, { css } from 'styled-components'

export const Buttonbase=styled.button<{disabled?:boolean,pad?:string}>`
padding:${(props)=>props.pad?props.pad:'10px'};
border:1px solid #eee;
background:${(props)=>props.disabled?'#333':'#ddd'};
color:${(props)=>props.disabled?'#333':'#ddd'}

${(props)=>props.disabled && css`
      font-size:15px;
      font-weight:500;
      line-height:20px;
`}
`

