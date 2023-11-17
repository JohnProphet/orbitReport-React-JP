//import React from "react";
import ("./styling.css")

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
        <tr>
          <td>satellite.name</td>
          <td>satellite.type</td>
          <td>satellite.launchDate</td>
          <td>satellite.status</td>
 
          {/* <td>{satellite.name}</td>
          <td>{satellite.type}</td>
          <td>{satellite.launchDate}</td>
          <td>{satellite.status}</td> */}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;