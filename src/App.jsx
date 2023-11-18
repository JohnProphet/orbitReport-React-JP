import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import React, { useState } from 'react';
import satData from "./components/satData";


function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  return (
    <div>
       <>
   <Banner />
   <Buttons
     filterByType={filterByType}
     setSat={setSat}
     displaySats={displaySats}
   />
   <Table sat={sat} />
 </>
    </div>
  );
}

/* FIXME unfinished function below:
1) Create arrow FUNCTION 'filterByType' which will take PARAMETER 'currentType'
2) Inside the function, update VARIABLE 'displaySats' using FILTER
3) FILTER requires a callback called 'newSatDisplay'
4) the filter FUNCTION returns 'newSatDisplay.orbitType' that EQUALS 'currentType'
5) pass updated 'displaySats' to 'setSat'  */

const filterByType = (currentType) =>
{
  displaySats.filter(sat.orbitType) //FIXME bad logic
  displaySats.orbitType=currentType;
  return currentType
  // TODO: update 'displaySats' to 'setSat'
}

//FIXME ^^ABOVE^^ probably wrong

export default App;
