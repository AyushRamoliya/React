import React, { useEffect, useState } from 'react'

export default function Apiwithfetch() {
     const [data , setData] = useState("");
    useEffect(()=>{
        fetchApi()
    },[])

    const fetchApi = async() =>{
        const response = await fetch("https://fakestoreapi.com/products");
        console.log(response.data);
        const res = await response.json();
        console.log(res);
        setData(res)
    }

  return (
    <div>
        <h1>Apiwithfetch</h1>
        {
            data &&
            data.map((e,i) => {
                return <ul key={i}>
                    <li>{e.title}</li>
                    <li>{e.price}</li>
                </ul>
            })
        }
    </div>


  )
}
