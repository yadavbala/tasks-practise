import React, { createContext, useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter, Personal ,ProductInfo,ProductList,Products,UserInfo,sellerInfo} from './components';
import { Cart } from './components/Cart';
import { ISeller} from './components/ProductInfo/ProductInfo';
import styled from 'styled-components';

export const Flexbox=styled.div`
        display:flex;
`

const HeaderContainer=styled(Flexbox)`
      width:100vw;
      height:60px;
      background:#eee;
     justify-content:space-between;
`



export const sellerContext=createContext<ISeller>(sellerInfo);
function App() {

  interface Props{
    name:string,
    id:number,
    price:number,
    description?:string
  }

  

  const headerelement=useRef() as React.RefObject<HTMLHeadingElement>

  const [toggle,settoggle]=useState<boolean>(true)
  const [countArr,setcount]=useState<Array<Props>>([])
  const [infoprod,setprodinfo]=useState<Array<any>>([])
  const[counter,setcounter]=useState<number>(0)

  console.log('count',countArr)

  const handleCounter=()=>{
    setcounter(val=>++val)
  }

  const addToCart=(ele:Props)=>{
      setcount([...countArr,ele])
  }
  const handleToggle=()=>{
    settoggle(toggle=>!toggle)
  }
  const updateTitle=(ele:{name:string,id:number})=>{
     console.log('updated title>>',ele)
  }

  useEffect(()=>{
    setprodinfo(ProductInfo)
    console.log('subscribe')
    console.log(headerelement?.current?.innerText)
    return ()=>{
      console.log('unsubscribe')
    }
  },[])
  return (
    <div>
      <HeaderContainer>
        <Flexbox>menu</Flexbox>
        <Flexbox>Home</Flexbox>
        <Flexbox>About Us</Flexbox>
      </HeaderContainer>
      <sellerContext.Provider value={sellerInfo}>
       <h1 ref={headerelement}>react with typescript</h1>
       <button onClick={handleCounter}>counter-{counter}</button>
       {/*<Counter/>
       <Personal name='bala' age={40} withBorder={false}/>
       {toggle &&<UserInfo lastLogin='hello'/>}
       <button onClick={handleToggle}>change</button>*/}
       <ProductList list={ProductInfo} handleCart={addToCart} updateTitle={updateTitle}>

         
        
      </ProductList>
      {/*<Products name='scalar' id={5} price={50} handleCart={addToCart}/>*/}
      {
         counter%2==0 &&(
          <Cart count={countArr} data={counter}/>
         )
      }
     </sellerContext.Provider>

    </div>
  );
}

export default App;
