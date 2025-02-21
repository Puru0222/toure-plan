import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeHandler(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No Place Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} onRemove={removeHandler}></Tours>
    </div>
  );
};

export default App;
