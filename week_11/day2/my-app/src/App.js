import "./App.css";
import CardContainer from "./Components/CardContainer.jsx";
import { data } from "./data/data";


function App() {
  return (
    <div className="App">
      <h1>Car Search Page</h1>
      <CardContainer carData={data} />
    </div>
  );
}

export default App;