import logo from "./logo.svg";
import AlexImage from "./assets/Alex.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={AlexImage}
          style={{
            width: 200,
            height: 200,
            borderRadius: 120,
          }}
          alt="Alexandra Paskhaver's Profile Picture"
        />
        <p>Hello! I'm Alexandra Paskhaver.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
