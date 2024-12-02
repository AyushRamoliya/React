import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const location = useLocation();

  const activeStyle = { backgroundColor: '#9f2089', color: 'white', padding: '5px 10px', borderRadius: '5px' };

  const getActivePage = (path)=>{
    return location.pathname == path ? activeStyle : {}
  }
  return (
    <div>
      <nav className='h-[80px] flex justify-between items-center'>
        <div className="logo ms-[3%]">
            <img className='h-[6vh]' src="/meesho.svg" alt="" />
        </div>
        <div className="nav me-[2.5%] flex gap-[50px]">
          <Link to={"/"} style={getActivePage('/')}>Home</Link>
          <Link to={"/men"} style={getActivePage('/men')}>Men</Link>
          <Link to={"/women"} style={getActivePage('/women')}>Women</Link>
          <Link to={"/electronic"} style={getActivePage('/electronic')}>Electronic</Link>
          <Link to={"/jewellery"} style={getActivePage('/jewellery')}>Jewellery</Link>
        </div>
      </nav>
    </div>
  )
}

export default  Nav;