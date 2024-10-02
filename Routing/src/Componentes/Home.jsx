import React from 'react'
import { Link,useLocation } from 'react-router-dom'

export default function Home() {

  let deta = "123456789"

  let location = useLocation('');
  return (
    <div style={{height:"100px", width:"100%",border:"1px solid", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h1>Home</h1>

        <h1>{location.state?.name}</h1>
        
        <Link to={`/About/${deta}`} style={{marginLeft:"50px"}}>About</Link> 
        <Link to={'/Contact'}  style={{marginLeft:"50px"}}>Contact</Link>
        <Link to={'/Blog'} style={{marginLeft:"50px"}}>Blog</Link>
    </div>
  )
}
