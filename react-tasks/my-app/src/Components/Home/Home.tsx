import React from 'react'
import styled from 'styled-components'


const MainHeading=styled.h1`
display:flex;
justify-content:center;
color:darkgreen;
`

export const Home:React.FC=()=>{
   return (
       <div>
           <MainHeading>Welcome to Todo Application</MainHeading>
       </div>
   )
}