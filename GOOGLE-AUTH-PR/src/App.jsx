import React from 'react'
import Login from './Firebase/Login'
import Dashboard from './Firebase/Dashboard';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

      {/* <Login />
      <Dashboard /> */}
    </div>
  )
}