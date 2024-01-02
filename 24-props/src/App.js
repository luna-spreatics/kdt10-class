import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';

function App() {
  return (
    <div className="App">
      <FuncComponent name={3} />
      <FuncComponent />

      <hr />
      <Button link="https://www.google.com">Google2</Button>

      <hr />
      <ClassComponent name={3} />
      <ClassComponent />
    </div>
  );
}

export default App;
