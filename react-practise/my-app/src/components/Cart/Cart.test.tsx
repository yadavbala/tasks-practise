import React from "react";

import { Cart } from "./Cart";

import { render } from "@testing-library/react";

//describe()-test suite contains all tests

//test()-we can write single test

describe("cart component", () => {
  test("renders", () => {
    expect(()=>{
      render(<Cart count={[]} />) 
    }).not.toThrowError()
     
  });

  test("renders with all props", () => {
    const {getByText}= render(<Cart count={[]} displayAll={true} data={5} />);
    expect(getByText('name-price-quantity')).toBeInTheDocument()
  });

  test('renders without display',()=>{
    const {getByText}=render(<Cart count={[]} displayAll={false} data={5}/>)
    expect(getByText('Products')).toBeInTheDocument()
  })
});

























