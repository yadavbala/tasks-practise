import React from 'react'
import {Buttonbase} from './button'

export default{
    title:'Button',
    component:Buttonbase
}


export const Primary:React.FC=()=>{
  return(
      <Buttonbase>
          primary
      </Buttonbase>
  )
}

export const Secondary:React.FC=()=>{
    return(
        <Buttonbase>
            secondary
        </Buttonbase>
    )
  }

