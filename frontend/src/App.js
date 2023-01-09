import { useState, useEffect } from 'react';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';
import { ethers } from "ethers";
import './App.css';

function App() {
  const [greeting, doGreeting] = useState(null);
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  // useEffect to interact with our blockchain

  useEffect(() => {

    const loadProvider = async () => {
      let contractAddress = "";
      const url = "http://127.0.0.1:7545";
    }
  })

  return (
    <div className="center">
      dsdgsg
    </div>
  );
}

export default App;


