import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Create from './Components/Create'
import Delete from './Components/Delete'
import Update from './Components/Update'
import { useState } from 'react'

function App() {

  const [data, setData] = useState([
  
    { id: 1, name: "Abcd", subject: "react" },
    
    { id: 2, name: "sfjngk", subject: "node.js" },
  
  ]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={data} />}></Route>
          <Route path='/Create' element={<Create data={data} setData={setData} />}></Route>
          <Route path='/Delete' element={<Delete data={data} setData={setData} />}></Route>
          <Route path='/Update' element={<Update data={data} setData={setData}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
