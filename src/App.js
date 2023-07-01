import 'bootstrap/dist/css/bootstrap.css';
import Add from './components/Add';
import React from 'react';


import { BrowserRouter , Routes , Route } from 'react-router-dom';

import Substract from './components/Substract';
import Multiply from './components/Multiply';
 import Divide from './components/Divide';
import Home from './components/Home';

function App() {
  return (
  <>
    

    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "add" element = {<Add/>}></Route>
        <Route path = "substract" element = {<Substract/>}></Route>
        <Route path = "multiply" element = {<Multiply/>}></Route>
        <Route path = "division" element = {<Divide/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
};

export default App;
