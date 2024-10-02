import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Componentes/Home'
import About from './Componentes/About'
import Contact from './Componentes/Contact'
import Blog from './Componentes/Blog'

export default function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About/:id' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Blog' element={<Blog/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
