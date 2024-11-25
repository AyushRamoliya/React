import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'


export default function Signin() {

   
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
   
    const navigate = useNavigate()

    const handleclick = () => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(users => {
                navigate("/dashboard")
            })

    
    }
    return ( 
        <div className='s1_main2'>
            <h1 className='heading1' data-aos="fade-left">Sign in Form</h1>

            
            <br />
            <input className='inp2' value={email} type="text" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
            <br /><br />
            <input className='inp2' value={pass} type="text" placeholder='Enter pass' onChange={(e) => setPass(e.target.value)} />
            <br /><br />
            <button className='button' onClick={handleclick}>Sign in</button>
            <br /><br />
            <button className='button'>
                    <Link className='link' to={"/"}>Sign Up</Link>
                </button>
        </div>
    )
}
