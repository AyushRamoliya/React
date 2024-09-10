import React, { useEffect, useRef } from 'react'

export default function UseRef() {
  
    const inputRef = useRef();
    const handleclick = ()=>{
        inputRef.current.focus();
        let p = inputRef.current.value 
        alert(`the value is: ${p}`);

    }

    const inputuseeff = useRef();

    useEffect(()=>{
        setTimeout (()=>{
            inputuseeff.current.focus();
        } , 3000)
    } , [])


        

  return (
    <div id='d2'>
        <h1>UseRef</h1>
        <input type="text" ref={inputRef} />
        <br /><br /><br /><br />
        <button onClick={handleclick}>click</button>
        <br />
         <h1 id='u1'>Useeffect</h1>
         
        <input type="text" ref={inputuseeff} placeholder='useeffect' id='i1' />
    </div>
  )
}