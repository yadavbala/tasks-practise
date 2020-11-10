import React from 'react'
import { render } from '@testing-library/react'
import { Todo } from './Todo'
import userEvent from '@testing-library/user-event'


describe('todo event',()=>{
    test('render todo',()=>{
        expect(()=>{
            render(<Todo onChange={()=>{}}/>)
        }).not.toThrowError()
    })

    test('render todo name with initial value',()=>{
        const {getByTestId}=render(<Todo onChange={()=>{}}/>)
     
        expect(getByTestId('todo-value').value).toEqual('')
    })

    test('check todo name on change',()=>{
        const mockcallback=jest.fn()
        const {getByTestId}=render(<Todo onChange={mockcallback}/>)
        userEvent.type(getByTestId('todo-value'),'send email to boss',{allAtOnce:true})

        expect(mockcallback).toBeCalledWith({todo:'send email to boss'})
    })
})