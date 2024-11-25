import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [city, setCity] = useState('')
    const [hobby, setHobby] = useState('')

   
    const navigate = useNavigate()

    const handlesignup = () => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(data => {
                setDoc(doc(db, "users", data.user.uid), {
                    name, email, city, hobby
                })
                console.log("added");
                navigate("/dashboard"); 
            })
        

      

    }

    return (
        <div className='s1_main1'>
            <h1 className='heading'>Sign up Form</h1>
           

            <br />
            <input className='inp1' type="text" value={name} placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
            <br /><br />
            <input className='inp1' type="text" value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
            <br /><br />
            <input className='inp1' type="text" value={pass} placeholder='Enter Pass' onChange={(e) => setPass(e.target.value)} />
            <br /><br />
            <input className='inp1' type="text" value={city} placeholder='Enter City' onChange={(e) => setCity(e.target.value)} />
            <br /><br />
            <input className='inp1' type="text" value={hobby} placeholder='Enter Hobby' onChange={(e) => setHobby(e.target.value)} />
            <br /><br />
            <button className='button' onClick={handlesignup}>Sign Up</button>
            <br /><br />
            <button className='button'>
            <Link className='link' to={"/signin"}>Sign In</Link>
            </button>
            <br />

        </div>
    )
}
