import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Delete({ data, setData }) {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const handleDelete = () => {
    let deleteItem = data.filter((item) => item.id !== parseInt(id));
    setData(deleteItem);
    navigate("/");  
  }

  return (
    <div className="delete-container">
      <h1 className="delete-header">Delete</h1>

      <input 
        type="text" 
        placeholder="Enter ID to Delete" 
        className="delete-input"
        onChange={(e) => setId(e.target.value)} 
      />
      <button 
        className="delete-button" 
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
