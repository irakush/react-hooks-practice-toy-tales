import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  
  const toyCard = toys.map((eachToyObj) => {
    return <ToyCard toy={eachToyObj} key={eachToyObj.id} />
  })

  return (
    <div id="toy-collection">
      {toyCard}
    </div>
  );
}

export default ToyContainer;
