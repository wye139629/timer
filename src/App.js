import "./App.css";
import { useState, useEffect } from "react";
import Background from "./component/ReactBackGround";

function App() {
  return (
    <div className="App">
      <Timer></Timer>
    </div>
  );
}

const Timer = () => {
  let [min, setMin] = useState(0);

  return (
    <div>
      {/* <button onClick={plusHandler}>+</button> */}
      <Button plus={true} min={min} setMin={setMin} />
      <h1>{min}Minutes</h1>
      <Button plus={false} min={min} setMin={setMin} />
    </div>
  );
};

function Button({ plus, min, setMin }) {
  // console.log(props);
  // const { plus } = props;
  function clickHanlder() {
    if (plus) {
      // min += 1;
      setMin(++min);
      return;
    }
    if (min > 0) {
      min -= 1;
      setMin(min);
    }
  }
  return <button onClick={clickHanlder}>{plus ? "+" : "-"}</button>;
}
export default App;
