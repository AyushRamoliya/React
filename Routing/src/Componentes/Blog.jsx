import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div>
         <h1>Blog</h1>
        
        <Link to={'/'}>Home</Link>
        <Link to={'/About'}>About</Link>
        <Link to={'/Cpntact'}>Contact</Link>
    </div>
  )
}
