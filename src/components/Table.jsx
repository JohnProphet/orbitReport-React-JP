//import React from "react";
import ("./styling.css")
import satData from "./satData";

const Table = ({ sat }) => 
{
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
     
      <tbody>
        {satData.map((sat, key) =>
        {
          return (
            <tr key={key}>
              <td>{sat.name}</td>
              <td>{sat.type}</td>
              <td>{sat.launchDate}</td>
              <td>sat.operational.value</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default Table;