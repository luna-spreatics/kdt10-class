import UseCallbackEx from './UseCallbackEx';
import UseMemoEx from './UseMemoEx';
import UseCallbackEx2 from './useCallbackEx2';

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={3} />
    </div>
  );
}

export default App;
