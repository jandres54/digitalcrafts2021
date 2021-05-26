import './App.css';
import React, {useState} from "react";
import Counter from './Components/Counter';
import ComponentTwo from './Components/ComponentTwo';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Counter />
      <ComponentTwo />
    </div>
  );
}

export default App;
