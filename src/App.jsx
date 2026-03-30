import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="KU_Logo.png" className="App-logo" alt="logo" />
        <p>
          We <span className="heart">♥️</span> Devops
        </p>
        <img src="Fish.png" style={{width:300}} />
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
