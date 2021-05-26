import './App.css';
import React, {useState} from "react";
import Counter from './Components/Counter';


function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
