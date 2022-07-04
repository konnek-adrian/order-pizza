import React, { useState } from "react";
import "./App.css";
import Order from "./components/order.js";
import Compose from "./components/compose.js";

function App() {
  const [pizza, setPizza] = useState(null);

  const getPizza = (pizza) => {
    setPizza(pizza);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Order pizza</h1>
      </header>
      <div className="content">
        <Compose getPizza={getPizza} />
        <Order newPizza={pizza} />
      </div>
    </div>
  );
}

export default App;
