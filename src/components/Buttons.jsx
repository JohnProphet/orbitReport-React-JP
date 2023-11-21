import "./styling.css";
import satData from "./satData";


const Buttons = ({ filterByType, setSat, displaySats }) => 
{
  return (
    <div className="flex-container">
      {displaySats.map((sat, id) => 
      {
        return (
        // This creates LOW, MEDIUM, HIGH buttons
        <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
        </button>
        );
      })}
       {/* this creates the ALL button */}
      <button onClick={()=> setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;