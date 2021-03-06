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
  const [numOfOperation, setNumOfOperation] = useState(0)


  return (
    <div className="App App-header ">
      <div className="calc">
        <TotalNumber total={total} number={number} />
        <div className="keys">
          <div className="num-clear">
            <ClearTotal
              setTotal={setTotal}
              setOperation={setOperation}
              setNumber={setNumber}
              setNumOfOperation={setNumOfOperation}
            />
            <Numbers
              number={number}
              setNumber={setNumber}
              setTotal={setTotal}
              numOfOperation={numOfOperation}
              total={total}
            />
          </div>
          <div className="ops">
            <Operations
              setNumber={setNumber}
              total={total}
              setTotal={setTotal}
              setOperation={setOperation}
              number={number}
              operation={operation}
              setNumOfOperation={setNumOfOperation}
              numOfOperation={numOfOperation}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
