import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";

import App from './App';
import Inicio from './Routes/Inicio'
import Blog from './Routes/Blog';
import Post from './Routes/Post';
import Contacto from './Routes/Contacto'
import NoEncontrado from './Routes/NoEncontrado';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Inicio/>}/>
        <Route path='blog' element={<Blog />}/>
        <Route path='blog/:id' element={<Post />}/>
        <Route path='contacto' element={<Contacto />}/>

        <Route path='*' element={<NoEncontrado/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

