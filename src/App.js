import { useState } from "react";
import "./App.css";
import Boxes from "./box";

const App = () => {
  const [val, setVal] = useState("");

  return (
    
    <Boxes
      val={val}
      setVal={setVal}
    />
  );
};

export default App;
