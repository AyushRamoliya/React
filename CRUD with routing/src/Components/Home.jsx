import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ data }) {
  return (
    <div className="container">
      <h1 className="header">Home</h1>

      <div className="links-container">
        <Link to="/Create" className="link">Create</Link>
        <Link to="/Delete" className="link">Delete</Link>
        <Link to="/Update" className="link">Update</Link>
      </div>

      <table className="table">
        <thead>
          <tr className="table-header-row">
            <th className="table-header">ID</th>
            <th className="table-header">Name</th>
            <th className="table-header">Subject</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((e, i) => (
              <tr key={i} className="table-row">
                <td className="table-cell">{e.id}</td>
                <td className="table-cell">{e.name}</td>
                <td className="table-cell">{e.subject}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
