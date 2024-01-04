import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import HandlerEx from './HandlerEx';
import SyntheticEvent from './SyntheticEvent';
import ExAll from './exAll/ExAll';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />

      <ClassBind />
      <hr />

      <Counter />

      <HandlerEx />
      <hr />

      <Ex2 />
      <hr />

      <Ex3 />
      <hr />

      {/* 전체 실습 */}
      <ExAll />
    </div>
  );
}

export default App;
