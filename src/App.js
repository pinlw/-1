import React, { useState, useRef  } from 'react';
import 'antd/dist/antd.css';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Home1 from './view/home1';
import Home2 from './view/home2';
import Home3 from './view/home3';
import Home4 from './view/home4';
import Nav from './view/nav';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}


const App = () => {
  const child = useRef();
  const awdli = (awd) => {
    child.current.changeName(awd);
  };

  return (
    <div className='home'
      style={{
        height: '100%',
        display: 'flex',
      }}
    >
      <Nav ref={child}/>
      <div className='homeRight'
        style={{
          flex: '1'
        }}
      >
              <Routes>
                <Route path='/' element = {<Home1/>}></Route>
                <Route path='/home2' element = {<Home2/>}></Route>
                <Route path='/home3' element = {<Home3/>}></Route>
                <Route path='/home4' element = {<Home4 awdli={awdli}/>}></Route>
              </Routes>    
      </div>
    </div>
    
  );
}

export default App;
