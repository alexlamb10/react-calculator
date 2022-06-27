import logo from './logo.svg';
import './App.css';
import TotalNumber from './components/TotalNumber';
import ClearTotal from './components/ClearTotal';
import Numbers from './components/Numbers';
import Operations from './components/Operations';

function App() {
  return (
    <div className="App App-header ">
      <div className='calc'>
        <TotalNumber />
        <div className='keys'>
          <div>
            <ClearTotal />
            <Numbers />
          </div>
          <div>
            <Operations />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
