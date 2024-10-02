import React from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'

export default function About() {
  const param = useParams('');

  const navigate = useNavigate('');

  const handelbtn = () => {
    navigate ("/",{state:{name :"Students"}})
  }
  return (
    <div style={{height:"100px", width:"100%",border:"1px solid", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h1>About</h1>
        
        <Link to={'/'} style={{marginLeft:"50px"}}>Home</Link>

        <h1 style={{marginLeft:"50px"}}>{param.id}</h1>

        <Link to={'/Contact'} style={{marginLeft:"50px"}}>Contact</Link>
        <Link to={'/Blog'} style={{marginLeft:"50px"}}>Blog</Link>

        <button onClick={handelbtn} style={{marginLeft:"50px"}}>Go To Home page</button>
    </div>
  )
}
