import "./App.css";
import Order from "./components/order";
import Compose from "./components/compose";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Order pizza</h1>
        <Compose />
        <Order />
      </header>
    </div>
  );
}

export default App;
