import './App.css';
import { useState, useEffect } from 'react';
import TotalNumber from './components/TotalNumber';
import ClearTotal from './components/ClearTotal';
import Numbers from './components/Numbers';
import Operations from './components/Operations';

function App() {
  const [total, setTotal] = useState(0)
  const [operation, setOperation] = useState("")
  const [number, setNumber] = useState(0)


  return (
    <div className="App App-header ">
      <div className="calc">
        <TotalNumber total={total} />
        <div className="keys">
          <div className="num-clear">
            <ClearTotal />
            <Numbers number={number} setNumber={setNumber} />
          </div>
          <div className="ops">
            <Operations setOperation={setOperation} number={number} operation={operation} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
