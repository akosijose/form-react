import React, { Component } from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const Table = props => {
  return (
    <table>
      <TableHeader />
      <TableBody {...props} />
    </table>
  );
};

const TableBody = ({ characterData, removeCharacter }) => {
  const row = characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{row}</tbody>;
};

export default Table;
