//import React from "react";
import ("./styling.css")
//import satData from ".";


const Buttons = ({ filterByType, setSat, displaySats }) => 
{
  return (
    <div>
      {displaySats.map((sat, id) => 
      {
        return (
        <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
        </button>
        );
      })}
      
      <button onClick={allOrbits}>All Orbits</button>
    </div>
  );
};


function allOrbits()
{
  alert("all orbits selected!")
}

export default Buttons;