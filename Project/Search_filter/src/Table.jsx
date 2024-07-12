import React from "react";
import "./Table.css";
const Table = ({ data }) => {
  return (
    <table>
      <caption>General Information</caption>
      <thead>
        <tr>
          <th className="firstchild">S.no</th>
          <th>Name</th>
          <th>Gender</th>
          <th className="lastchild">E-mail</th>
        </tr>
      </thead>
      <tbody>
        {data.map((items) => (
          <tr key={items.id}>
            <td className="firstchild">{items.id}</td>
            <td>{items.first_name} {items.last_name}</td>
            <td>{items.gender}</td>
            <td className="lastchild">{items.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
