import React from "react";
import {  render } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("counter component", () => {
  test("check initial count value", () => {
    const { getByTestId } = render(<Counter />);
    expect(Number(getByTestId("counter-value").innerHTML)).toEqual(0);
  });

  test("increment", () => {
    const { getByTestId } = render(<Counter />);
    const incrementClick = getByTestId("increment");
    incrementClick.click();
    incrementClick.click();
    incrementClick.click();
   expect(Number(getByTestId('counter-value').innerHTML)).toEqual(3)
  });

  test('decrement',()=>{
    const {getByTestId}=render(<Counter/>)
    const decrementClick=getByTestId('decrement')
    decrementClick.click()
    decrementClick.click()
    decrementClick.click()
    expect(Number(getByTestId('counter-value').innerHTML)).toEqual(-3)
  })

  test('increment and decrement',()=>{
    const {getByTestId}=render(<Counter/>)
    const incrementClick=getByTestId('increment')
    const decrementClick=getByTestId('decrement')
    incrementClick.click()
    decrementClick.click()
    incrementClick.click()
    incrementClick.click()
    expect(Number(getByTestId('counter-value').innerHTML)).toEqual(2)
  })

  test('reset',()=>{
    const {getByTestId}=render(<Counter />)
   const resetButton=getByTestId('reset')
   resetButton.click()
   expect(Number(getByTestId('counter-value').innerHTML)).toEqual(0)
  })

  test('reset',()=>{
    const {getByTestId}=render(<Counter />)
    userEvent.click(getByTestId('reset'))
    expect(Number(getByTestId('counter-value').innerHTML)).toEqual(0)
  })
});