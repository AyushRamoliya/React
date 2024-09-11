import React, { useState } from 'react'

export default function Login() {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([])

  const addData = (e) => {
    e.preventDefault();
    const newEntry = { email, password }

    setAllEntry([...allEntry, newEntry])
    console.log(allEntry);

  }

  return (
    <div className='div1'>
      <div className="form">

        <div className="txt">
          <center>
            <h1>Login Form</h1> <br/><br/>

            <form action="" onSubmit={addData}>
            <input type="text" placeholder='Enter Username' className='input1'/> <br/><br/>
              <input type="email" placeholder='Enter Email' className='input1' value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
              <input type="password" placeholder='Enter Password' className='input1' value={password} onChange={(e) => setPassword(e.target.value)} />
              
              <br /><br /><br />
              <button className='btn1'><span>Submit</span></button>
            </form>

          </center>         

        </div>
        <div className='form_data'>
          
              {
                allEntry.map((data , i)=>{
                  return(
                    <table>
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>E-mail</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{data.email}</td>
                        <td>{data.password}</td>
                      </tr>
                    </tbody>
                  </table>
                  )
                })
              }
          </div>
      </div>
    </div>
  )
}