import React, { useEffect, useState } from 'react'

export default function Form(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('');
   
   
  return (
        <div>
            

            <div className='b1'>
            <form action="">
                <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/><br/><br/>
                <input type="text" placeholder='Enter  Email'  onChange={(e) => setEmail(e.target.value)}/><br/><br/>
                <input type="text" placeholder='Mobile number'/><br/><br/>
                
                <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
                    <option value="">cetegory</option>
                    <option value="electric">Electric</option>
                    <option value="Clothing">Clothing</option>
                </select><br/><br/>

                <button type='submit'>Submit</button>
            </form>
            </div>
        </div>
  )
}
