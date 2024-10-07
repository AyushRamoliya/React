import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create({ data, setData }) {
  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const handelbtn = () => {
    
    let obj = { id: data.length + 1, name: name, subject: subject };
    setData([...data, obj]);
    navigate("/");  
  }

  return (
    <div className="create-container">
      <h1 className="create-header">Create</h1>

      <input 
        type="text" 
        placeholder="Enter the Name" 
        className="create-input"
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Enter the Subject" 
        className="create-input"
        onChange={(e) => setSubject(e.target.value)} 
      />
      <button 
        className="create-button" 
        onClick={handelbtn}
      >
        Submit
      </button>
    </div>
  );
}
