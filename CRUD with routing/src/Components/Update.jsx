import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Update({ data, setData }) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    
    const foundItem = data.find(item => item.id == id);
    if (foundItem) {
      setName(foundItem.name);
      setSubject(foundItem.subject);
      setSelectedItem(foundItem);
    } else {
      setName("");
      setSubject("");
      setSelectedItem(null);
    }
  }, [id, data]);

  const handleUpdate = () => {
    if (selectedItem) {
      const updatedData = data.map(item =>
        item.id == id ? { ...item, name, subject } : item
      );
      setData(updatedData);
      navigate("/");  
    }
  };

  return (
    <div className="update-container">
      <h1 className="update-header">Update</h1>

      <input
        type="text"
        placeholder="Enter ID"
        className="update-input"
        onChange={(e) => setId(e.target.value)}
      />

      {selectedItem && (
        <>
          <input
            type="text"
            placeholder="Enter name"
            className="update-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter subject"
            className="update-input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <button 
            className="update-button" 
            onClick={handleUpdate}
          >
            Update
          </button>
        </>
      )}
    </div>
  );
}
