import React from "react";
import "../assets/table.css";
function Table({ countries, darkMode }) {
  return (
    <div className={`table ${darkMode && "dark-mode--table"}`}>
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
