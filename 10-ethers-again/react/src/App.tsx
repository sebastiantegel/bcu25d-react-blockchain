import { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import { abi, adress } from "./config";
import { Wallet } from "./components/Wallet";
import { PersonList } from "./components/PersonList";
import { AddPersonForm } from "./components/AddPersonForm";
import type { Persons } from "./models";
import type { Person } from "./models/Person";
import { getPersons } from "./services/personService";

function App() {
  const [readContract, setReadContract] = useState<Persons>();
  const [writeContract, setWriteContract] = useState<Persons>();
  const [account, setAccount] = useState<string>("");
  const [persons, setPersons] = useState<Person[]>([]);

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
          ) as unknown as Persons;
          setReadContract(readContract);

          const signer = await window.provider.getSigner();
          const writeContract = new ethers.Contract(
            adress,
            abi,
            signer,
          ) as unknown as Persons;
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

  const getPersonsFromChain = async () => {
    const persons = await getPersons(readContract);
    setPersons(persons);
  };

  return (
    <>
      <section id="center">
        <Wallet account={account} />
        {writeContract && (
          <AddPersonForm
            writeContract={writeContract}
            getPersonsFromChain={getPersonsFromChain}
          />
        )}
        <button onClick={getPersonsFromChain}>Hämta personer</button>
        <PersonList
          persons={persons}
          writeContract={writeContract}
          getPersonsFromChain={getPersonsFromChain}
        ></PersonList>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
