import Faq from './Faq';
import Form from './Form';
import ExForm from './ExForm';
import UseCallbackEx from './UseCallbackEx';
import UseMemoEx from './UseMemoEx';
import UseReducerEx from './UseReducerEx';
import UseCallbackEx2 from './useCallbackEx2';

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={3} />
      <hr />
      <UseReducerEx />
      <hr />
      <Faq />
      <hr />
      <Form />
      <hr />
      <ExForm />
    </div>
  );
}

export default App;
