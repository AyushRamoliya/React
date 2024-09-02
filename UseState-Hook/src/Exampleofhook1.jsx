import React, { useState } from 'react'

function Exampleofhook1() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("Ayush")
    const [arr,setarr] = useState([1,2,3, "Ayush" , "Ramoliya" ,4,5])
    // const [arr2,setarr2] = useState([1,2,3,4,5,6,7,8,9,10])
    const [obj,setobj] = useState([{name: "Ayush",subject: "REACT.JS"}])
    const [arrobj,setarrobj] = useState([{name: "Ayush",subject: "NODE.JS"}])
    const increase = ()=>{
        setCount(count + 1)
    }
    const decrese = () =>{
        setCount(count - 1)
    }

  return (
    <div className='a1'>
        <h1>{count}</h1>
        <button onClick={increase}>increase</button>
        
        <button onClick={decrese} className='btn1'>decrese</button>
        <h1>{name}</h1>
        {
            arr.map((e,i)=>{
                return<p key={i}>{e}</p>
            })
        }
        {}

        <p>{obj.name}</p>
        <p>{obj.subject}</p>

        {
            arrobj.map((e,i)=>{
                

                return<ul key={i}>
                    <li>{e.name}</li>
                    <li>{e.subject}</li>
                </ul>
            })
        }
    </div>
  )
}

export default Exampleofhook1