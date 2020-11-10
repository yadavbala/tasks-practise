import React, { createContext, useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Counter,
  Personal,
  ProductInfo,
  ProductList,
  Products,
  UserInfo,
  sellerInfo,
} from "./components";
import { Cart } from "./components/Cart";
import { ISeller } from "./components/ProductInfo/ProductInfo";
import styled from "styled-components";
import { InputComponent } from "./components/InputComponent";

export const Flexbox = styled.div`
  display: flex;
`;

const HeaderContainer = styled(Flexbox)`
  width: 100vw;
  height: 60px;
  background: #eee;
  justify-content: space-between;
`;

export const SellerContext = createContext<ISeller | null>(null);
function App() {
  interface Props {
    name: string;
    id: number;
    price: number;
    description?: string;
  }

  const headerElement = useRef() as React.RefObject<HTMLHeadingElement>;

  const [toggle, settoggle] = useState<boolean>(true);
  const [countArr, setcount] = useState<Array<Props>>([]);
  const [infoprod, setprodinfo] = useState<Array<any>>([]);
  const [counter, setcounter] = useState<number>(0);

  console.log("count", countArr);

  const handleCounter = () => {
    setcounter((val) => ++val);
  };

  const addToCart = (ele: Props) => {
    setcount([...countArr, ele]);
  };
  const handleToggle = () => {
    settoggle((toggle) => !toggle);
  };
  const updateTitle = (ele: { name: string; id: number }) => {
    console.log("updated title>>", ele);
  };

  useEffect(() => {
    setprodinfo(ProductInfo);
    console.log("subscribe");
    if (headerElement && headerElement.current) {
      headerElement.current.innerText = "smartERP";
    }
    return () => {
      console.log("unsubscribe");
    };
  }, []);

  const handleValuesChange=(val:string):void=>{
     console.log('value',val)
  }
  return (
    <div>
      <h1>learn react</h1>
      <HeaderContainer>
        <Flexbox>menu</Flexbox>
        <Flexbox>Home</Flexbox>
        <Flexbox>About Us</Flexbox>
      </HeaderContainer>

      <h1 ref={headerElement}>react with typescript</h1>
      <button onClick={handleCounter}>counter-{counter}</button>
      {/*<Counter/>
       <Personal name='bala' age={40} withBorder={false}/>
       {toggle &&<UserInfo lastLogin='hello'/>}
       <button onClick={handleToggle}>change</button>*/}
      <SellerContext.Provider value={sellerInfo}>
        <ProductList
          list={ProductInfo}
          handleCart={addToCart}
          updateTitle={updateTitle}
        ></ProductList>
        {/*<Products name='scalar' id={5} price={50} handleCart={addToCart}/>*/}
        {counter % 2 == 0 && <Cart count={countArr} data={counter} displayAll={true}/>}
      </SellerContext.Provider>

      <InputComponent type='text' onValueChange={handleValuesChange} initialval='init'/>
    </div>
  );
}

export default App;
