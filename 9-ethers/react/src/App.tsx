import { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import { abi, adress } from "./config";
import { Wallet } from "./components/Wallet";
import { PersonList } from "./components/PersonList";
import { AddPersonForm } from "./components/AddPersonForm";

function App() {
  const [readContract, setReadContract] = useState<ethers.Contract>();
  const [writeContract, setWriteContract] = useState<ethers.Contract>();
  const [account, setAccount] = useState<string>("");

  useEffect(() => {
    const initProvider = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          // Koppla kontrakt från .sol till state
          window.provider = new ethers.BrowserProvider(window.ethereum);
          const readContract = new ethers.Contract(
            adress,
            abi,
            window.provider,
          );
          setReadContract(readContract);

          const signer = await window.provider.getSigner();
          const writeContract = new ethers.Contract(adress, abi, signer);
          setWriteContract(writeContract);

          const account = await signer.getAddress();
          setAccount(account);
        } catch {
          console.error("User rejected connection");
        }
      } else {
        console.error(
          "Öhh, installera någonting med web3 så att detta funkar.",
        );
      }
    };

    initProvider();
  }, []);

  return (
    <>
      <section id="center">
        <Wallet account={account} />
        {writeContract && <AddPersonForm writeContract={writeContract} />}
        <PersonList readContract={readContract}></PersonList>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
