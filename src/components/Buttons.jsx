//import React from "react";
import ("./styling.css")

const Buttons = ({ filterByType, setSat, displaySats }) => 
{
  return (
    <div>
      <button onClick={button1}>Low Orbit</button>
      <button onClick={button2}>Medium Orbit</button>
      <button onClick={button3}>High Orbit</button>
      <button onClick={button4}>All Orbits</button>
    </div>
  );
};

function button1()
{
  alert("low orbit selected!")
}

function button2()
{
  alert("medium orbit selected!")
}

function button3()
{
  alert("high orbit selected!")
}

function button4()
{
  alert("all orbits selected!")
}

export default Buttons;