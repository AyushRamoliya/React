import React, { useState } from 'react'

export default function Task1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(""); // Update for the name state
    const [subject, setSubject] = useState(""); // Update for the subject state
    const [isVisible, setIsVisible] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Form Submitted");

        let obj = {
            name: name,
            subject: subject
        };

        console.log(obj);
    };

    return (
        <div className='a1'>
            <form onSubmit={handleSubmit} action="" className='a2'>
                <h1>{count}</h1>
                <button type="button" onClick={() => setCount(count + 1)}>ADD</button>

                <br/>
                <input type="text" placeholder='ENTER THE NAME' onChange={(e) => setName(e.target.value)} style={{ marginTop: "20px", height: "35px", width: "300px" }} />
                <br/>
                <input type="text" placeholder='ENTER THE SUBJECT' onChange={(e) => setSubject(e.target.value)} style={{ marginTop: "20px", height: "35px", width: "300px" }} />

                <p>Name: {name}</p>
                <p>Subject: {subject}</p>

                <button type='submit'>SUBMIT</button>

                {
                    isVisible ? <h1>Hyee</h1> : <h1>Bye</h1>
                }

                <button type="button" onClick={() => setIsVisible(!isVisible)}>CLICK</button>
            </form>
        </div>
    );
}