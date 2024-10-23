import React, { useState } from 'react'

export default function Filter() {

    const [name,setName] = useState("");

    const arr = [
        {name: "utsav", subject :"React"},
        {name: "rutul", subject :"React"},
        {name: "ayush", subject :"React"},
        {name: "khushal", subject :"React"},
        {name: "saurabh", subject :"React"},
        {name: "kartik", subject :"React"},
    ]

    const data = arr.filter((item)=> item.name.includes(name))
  return (
    <div>
       <input type="text" placeholder='Search Here' onChange={(e)=> setName(e.target.value)}/> 

        {
            data && 
            data.map((e,i)=>{
                return <ul key={i}>
                    <li>{e.name}</li>
                    <li>{e.subject}</li>
                </ul>
            })
        }


    </div>
  )
}