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
      let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const url = "http://localhost:8545";
      const provider = new ethers.providers.JsonRpcProvider(url);

      const contract = new ethers.Contract(
        contractAddress,
        Greeter.abi,
        provider
      );
      setContract(contract);
      setProvider(provider);
      // console.log(contract)
    };
    loadProvider();
  }, [])

  useEffect(() => {
    const getGreeting = async () => {
      // console.log(`dgdssdag`)
      const greeting = await contract.greet();
      // console.log(greeting);
      doGreeting(greeting);
    }
    contract && getGreeting();
  }, [contract])

  const changeGreeting = async () => {
    const value = document.getElementById('value').value;
    const signer = provider.getSigner();
    const contractWithSigner = contract.connect(signer);
    const transaction = await contractWithSigner.setGreeting(value);
    await transaction.wait();
    const greeting = await contract.greet();
    doGreeting(greeting);

  }
  return (
    <div className="center">
      <h3>{greeting}</h3>
      <input type="text" className="input" id='value'></input>
      <button className="button" onClick={changeGreeting}>Change</button>
    </div>
  );
}

export default App;