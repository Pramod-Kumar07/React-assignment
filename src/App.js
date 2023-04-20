import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Benefits of React..</h3>
        <ol>
          <li>Component based architucture</li>
          <li>Virtual DOM for efficient updates</li>
          <li>Rich ecosyatem and comminity</li>
          <li>Cross platform development</li>
          <li>Strong community support</li>
        </ol>
        <butoon>Get Started..</butoon>
      </header>
    </div>
  );
}

export default App;
