import React from 'react'
import { render } from '@testing-library/react'
import { InputComponent } from './InputComponent'
import { Counter } from '../Counter'
import userEvent from '@testing-library/user-event'
//import {testInputId} from './InputComponent'

describe('Input component',()=>{
    test('render input with initial value',()=>{
        const {getByTestId}=render(<InputComponent type='text' initialval='init'/>)

        expect((getByTestId('input-value') as HTMLInputElement).value).toEqual('init')
    })

    test('initial val with mock callback',()=>{
        const mockCallback=jest.fn()
        const {getByTestId}=render(<InputComponent type='text' initialval='init' onValueChange={mockCallback}/>) 

        expect((getByTestId('input-value') as HTMLInputElement).value).toEqual('init')

        expect(mockCallback).not.toBeCalled()
    })

    test('call back validate on change event',()=>{
        const mockCallBack=jest.fn()
        const {getByTestId}=render(<InputComponent type='text' initialval='init' onValueChange={mockCallBack}/>)

        userEvent.type(getByTestId('input-value'),'update',{allAtOnce:true})

        expect(mockCallBack).toBeCalled()
    })

    test('call back validate on change event multiple times',()=>{
        const mockCallBack=jest.fn()
        const {getByTestId}=render(<InputComponent type='text' initialval='init' onValueChange={mockCallBack}/>)

        userEvent.type(getByTestId('input-value'),'update',{allAtOnce:true})
        userEvent.type(getByTestId('input-value'),'done',{allAtOnce:true})
        userEvent.type(getByTestId('input-value'),'updating',{allAtOnce:true})


        expect(mockCallBack).toBeCalledTimes(3)
    })

    test('validate val on changes',()=>{
        const mockCallBack=jest.fn()

        const {getByTestId}=render(<InputComponent type='text' initialval='' onValueChange={mockCallBack}/>)

        userEvent.type(getByTestId('input-value'),'update',{allAtOnce:true})

        expect(mockCallBack).toBeCalledWith('update')
    })

    test('another way of validate on change',()=>{
        const mockCallBack=jest.fn((val)=>{
            expect(val).toEqual('update')
        })

        const {getByTestId}=render(<InputComponent type='text' initialval='' onValueChange={mockCallBack}/>)

        userEvent.type(getByTestId('input-value'),'update',{allAtOnce:true})

        //expect(mockCallBack).toBeCalledWith('update')
    })

    test('validate onchange value multiple times',()=>{
        const mockCallBack=jest.fn()

        const {getByTestId}=render(<InputComponent type='text' initialval='' onValueChange={mockCallBack}/>)

        userEvent.type(getByTestId('input-value'),'update',{allAtOnce:true})
        expect(mockCallBack).toBeCalledWith('update')
        userEvent.type(getByTestId('input-value'),'strt',{allAtOnce:true})
        expect(mockCallBack).toBeCalledWith('strt')
        userEvent.type(getByTestId('input-value'),'sgrst',{allAtOnce:true})
        expect(mockCallBack).toBeCalledWith('sgrst')
        //expect(mockCallBack).toBeCalledWith('update')
    })
})

/*
   render
   render with all props
   mock func
*/


