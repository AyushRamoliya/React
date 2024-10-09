import React, { useState } from "react";

export default function Searching() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const arr = [
    {
      name: "Hp",
      subject: "Laptop",
      image: "./laptop1.jpg",
      Company: "Hp Laptops",
      price: "80,000",
    },
    {
      name: "Asus",
      subject: "Laptop",
      image: "./laptop2.jpg",
      Company: "Asus",
      price: "95,000",
    },
    {
      name: "Dell",
      subject: "Laptop",
      image: "./laptop3.jpg",
      Company: "Classic Cheese Pizza",
      price: "$11",
    },
    {
      name: "LG",
      subject: "Refrigerator",
      image: "./Re1.jpg",
      Company: "LG",
      price: "1,05,000",
    },
    {
      name: "Panasonic",
      subject: "Refrigerator",
      image: "./Re2.jpg",
      Company: "Panasonic",
      price: "1,12,000",
    },
    {
      name: "Sony",
      subject: "Refrigerator",
      image: "./Re3.jpg",
      Company: "Sony",
      price: "2,00,000",
    },
    {
      name: "Croma",
      subject: "AC",
      image: "./ac1.jpg",
      Company: "Croma",
      price: "35,000",
    },
    {
      name: "Lg",
      subject: "AC",
      image: "./ac2.jpg",
      Company: "Lg",
      price: "45,000",
    },
    {
      name: "Godrej",
      subject: "AC",
      image: "./ac3.jpg",
      Company: "Godrej",
      price: "39,990",
    },

  ];

  // Filter based on name and subject
  const data = arr.filter(
    (item) =>
      (subject ? item.subject === subject : true) &&
      (name ? item.name.toLowerCase().includes(name.toLowerCase()) : true)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Filter</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px", width: "200px" }}
      />

      <select onChange={(e) => setSubject(e.target.value)} style={{ marginBottom: "20px", padding: "10px" }}>
        <option value="">All Subjects</option>
        <option value="Laptop">Laptops</option>
        <option value="Refrigerator">Refrigerator</option>
        <option value="AC">AC</option>
      
      </select>

      <div style={{ display: "flex" ,flexWrap: "wrap", gap: "10px", width: "100%" }}>
        {data.length > 0 ? (
          data.map((e, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
              {e.image && (
                <img
                  src={e.image}
                  alt={e. Company}
                  style={{ width: "300px", height: "300px", borderRadius: "5px" }}
                />
              )}
              <h3>Company: {e.Comapny}</h3>
              <p>Price: {e.price}</p>
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
}