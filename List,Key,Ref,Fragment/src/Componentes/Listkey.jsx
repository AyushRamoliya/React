import React from 'react'

export default function Listkey() {
  
    const arr = ["Apple" , "Banana" , "Mango" , "Graps" , "Pineapple" , "Watermelon"];

  return (
    <div id='d1'>
        <h1>Listkey</h1>
        {
         
         arr.map((e,i)=>{
            return  <p key={i}>{e}</p>
         })
        }  
       
    </div>
  )
}