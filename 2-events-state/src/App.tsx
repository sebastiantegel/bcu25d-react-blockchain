import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ShouldChange } from "./components/ShouldChange";
import { State } from "./components/State";
import { StateObject } from "./components/StateObject";

function App() {
  return (
    <>
      <Button></Button>
      <Input></Input>
      {/* <ShouldChange></ShouldChange> */}
      <State></State>
      <StateObject></StateObject>
    </>
  );
}

export default App;
