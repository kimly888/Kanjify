import './App.css';
import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";

const HOME_API = "http://localhost:4000/";

function App() {
  const [data, setData] = useState({});

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
