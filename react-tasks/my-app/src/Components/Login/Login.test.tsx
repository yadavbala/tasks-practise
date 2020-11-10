import React from 'react'
import { render } from '@testing-library/react'
import { Login } from './Login'
import userEvent from '@testing-library/user-event'


describe('Login component',()=>{
    test('render login',()=>{
        expect(
            render(<Login onChange={()=>{}}/>)
        )
    })

    test('username check with initial value',()=>{
        const {getByTestId}=render(<Login onChange={()=>{}}/>)
        expect(getByTestId('username').value).toEqual('')
      
    })

    test('password check with initial value',()=>{
        const {getByTestId}=render(<Login onChange={()=>{}}/>)
        expect(getByTestId('password').value).toEqual('')
    })

    test('username with change value',()=>{
        const mockCallBack=jest.fn()
        const {getByTestId}=render(<Login onChange={mockCallBack}/>)
        userEvent.type(getByTestId('username'),'bala',{allAtOnce:true})
        expect(mockCallBack).toBeCalledWith({username:'bala',password:''})
    })

    test('password with change value',()=>{
        const mockCallBack=jest.fn()
        const {getByTestId}=render(<Login onChange={mockCallBack}/>)
        userEvent.type(getByTestId('password'),'yadav',{allAtOnce:true})
        expect(mockCallBack).toBeCalledWith({username:'',password:'yadav'})
    })
})