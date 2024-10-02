import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div style={{height:"100px", width:"100%",border:"1px solid", display:"flex",justifyContent:"center",alignItems:"center"}}>
         <h1>Contact</h1>
        
        <Link to={'/'}  style={{marginLeft:"50px"}}>Home</Link>
        <Link to={'/About'}  style={{marginLeft:"50px"}}>About</Link>
        <Link to={'/Blog'}  style={{marginLeft:"50px"}}>Blog</Link>
    </div>
  )
}


