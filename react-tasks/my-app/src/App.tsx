import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { Home, Login, Todo } from "./Components";


const HeaderContainer = styled.ul`
  list-style-type: none;
  background-color: #ddd;
  padding: 8px 0;
  display: flex;
  justify-content: space-around;
  margin-top: 0;
`;
const Heading = styled.h1`
  background-color: blanchedalmond;
  margin-bottom: 0;
  margin-top: 0px;
  justify-content: center;
  display: flex;
`;

function App() {
  return (
    <BrowserRouter>
        <h1>Learn React</h1>
      <Heading>Todo Application</Heading>
      <HeaderContainer>
        <li>
          <Link to="/">Todo App</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
      </HeaderContainer>
      <Route path="/" component={Home} exact={true} />
      <Route path="/login" component={Login} />
      <Route path="/todo" component={Todo} />
    </BrowserRouter>
  );
}

export default App;
