import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

const HOME_API = "http://localhost:4000/";

function App() {
  const [data, setData] = useState({});

  const res = fetch(`${HOME_API}test`);
  console.log(res);
  // useEffect(() => {
  //   fetch(`${HOME_API}test`, {
  //     method: "GET",
  //     // header: {
  //     //   "Content-type": "application/json"
  //     // },
  //     // body: "THIS IS TEST"
  //   }
  //   .then(res => res.json())
  //   .then(data => setData(data))
  //   )
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      {/* <p>{test.body}</p> */}
      </header>
    </div>
  );
}

export default App;
