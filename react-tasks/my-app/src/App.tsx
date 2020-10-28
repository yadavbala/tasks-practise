import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Route,Link} from 'react-router-dom'
import { Login, Todo } from './Components';

function App() {
  return (
    <BrowserRouter>
   
      <h1>Todo Application</h1>
      <Link to='/login'>Login</Link>
      <Link to='/todo'>Todo</Link>
      
      <Route path='/login' component={Login}/>
      <Route path='/todo' component={Todo}/>
    
    </BrowserRouter>
  );
}

export default App;
