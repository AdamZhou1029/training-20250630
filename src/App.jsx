import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EventDemo from "./components/EventDemo/EventDemo";
import Counter from "./components/Counter/Counter";
import Todolist from "./components/Todolist/Todolist";
import ClassDemo from "./components/ClassComponents/ClassDemo";
//auto complete
function App() {
  const [show, setShow] = useState(true);
  //const [count, setCount] = useState(0);
  const handleClick = (name) => {
    console.log("child button is clicked", name);
  };
  return (
    <>
      {/* <EventDemo onClickButton={handleClick} /> */}
      {/* <Counter /> */}
      <button id="toggle-btn" onClick={() => setShow(!show)}>
        Toggle show
      </button>
      {show && <ClassDemo name={"alice"} age={18} />}
      <Todolist />
    </>
  );
}

console.log(<ClassDemo />);
console.log(ClassDemo);

export default App;
