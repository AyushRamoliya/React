import React from 'react'

export default function Localstorage() {
    localStorage.setItem("name","student")

    let data = localStorage.getItem("name");
    console.log(data);

    localStorage.removeItem("name")

    let obj={name:"Ayush",subject:"Ramoliya"}

    localStorage.setItem("MyObj",JSON.stringify(obj));
    
    let objData = JSON.parse(localStorage.getItem("MyObj"))

    console.log(objData)
    return(
        <div></div>
    )
}
