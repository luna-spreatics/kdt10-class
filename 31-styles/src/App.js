import CssModuleComponent from './CssModuleComponent';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React styling</h1>

      <h2>CSS Module</h2>
      <CssModuleComponent type={'new-style'} />

      <h2>SASS</h2>
      <SassComponent />

      <h2>Styled-Components</h2>
      <StyledComponent />
    </div>
  );
}

export default App;
