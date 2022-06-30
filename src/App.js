import "./App.css";
import Order from "./components/order.js";
import Compose from "./components/compose.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Order pizza</h1>
      </header>
      <div className="content">
        <Compose />
        <Order />
      </div>
    </div>
  );
}

export default App;
