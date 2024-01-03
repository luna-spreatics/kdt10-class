import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';
import PropsEx1 from './PropsEx1';
import PropsEx2 from './PropsEx2';
import PropsEx3 from './PropsEx3';

function App() {
  const my_func = () => {
    console.log('콘솔 띄우기 성공!');
  };
  return (
    <div className="App">
      <FuncComponent name={3} />
      <FuncComponent />

      <hr />
      <Button link="https://www.google.com">Google2</Button>

      <hr />
      <ClassComponent name={3} />
      <ClassComponent />

      {/* 실습 */}
      <hr />
      <PropsEx1 food="비빔밥" />
      <PropsEx2
        title="나의 하루는 4시 30분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      />
      <PropsEx3 text="App 컴포넌트에서 넘겨준 text props" valid={my_func} />
    </div>
  );
}

export default App;
