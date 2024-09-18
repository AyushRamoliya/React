import React, { useState } from 'react';


export default function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [no, setNo] = useState('');
    const [nameerr, setNameerr] = useState('');
    const [numerr, setNumerr] = useState('');
    const [noerr, setNoerr] = useState('');
    const [category, setCategory] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        if (!name) {
            setNameerr("Enter name");
        } else {
            setNameerr("");
        }
        if (!number) {
            setNumerr("Enter number");
        } else {
            setNumerr("");
        }
        if (!no) {
            setNoerr("Enter GST no.");
        } else {
            setNoerr("");
        }
    };

    return (
        <div className='div1'>
            <div className="main">
                <form action="">
                    <label className='lb'>Name:</label><br />
                    <input type="text" className='in1' placeholder='Enter name' onChange={(e) => setName(e.target.value)} /><br />
                    <span>{nameerr}</span><br />

                    <label className='lb'>Mobile no:</label><br />
                    <input type="text" className='in1' placeholder='Enter mobile no' onChange={(e) => setNumber(e.target.value)} /><br />
                    <span>{numerr}</span><br />

                    <label className='lb'>GST no:</label><br />
                    <input type="text" className='in1' placeholder='Enter GST No' onChange={(e) => setNo(e.target.value)} /><br />
                    <span>{noerr}</span><br />

                    <select value={category} onChange={(e) => setCategory(e.target.value)} className='in1'>
                        <option value="">Category</option>
                        <option value="el">Electronics</option>
                        <option value="ve">Vehicle</option>
                        <option value="cl">Clothing</option>
                        <option value="gr">Grocery</option>
                        <option value="bo">Books</option>
                    </select><br />

                    {category === "el" && <>
                        <input className='input1' type="text" placeholder='Enter Warranty Details' />
                        <input className='input1' type="text" placeholder='Enter Guarantee Details' />
                        <input className='input1' type="text" placeholder='Enter Model Name' />
                    </>}

                    {category === "ve" && <>
                        <input className='input1' type="text" placeholder='Enter Vehicle Average KM' />
                        <input className='input1' type="text" placeholder='Enter Warranty Details' />
                        <input className='input1' type="text" placeholder='Enter Insurance Details' />
                    </>}

                    {category === "cl" && <>
                        <input className='input1' type="text" placeholder='Enter Brand Name' />
                        <input className='input1' type="text" placeholder='Enter Discount Amount' />
                        <input className='input1' type="text" placeholder='Enter Size' />
                    </>}

                    {category === "gr" && <>
                        <input className='input1' type="text" placeholder='Enter Expiry Date' />
                        <input className='input1' type="text" placeholder='Enter Ingredient Details' />
                        <input className='input1' type="text" placeholder='Enter Quantity' />
                    </>}

                    {category === "bo" && <>
                        <input className='input1' type="text" placeholder='Enter Author Name' />
                        <input className='input1' type="text" placeholder='Enter Subject Name' />
                        <input className='input1' type="text" placeholder='Enter Publisher Details' />
                    </>}

                    <button onClick={handleClick}>Submit</button>
                </form>
            </div>
        </div>
    );
}
