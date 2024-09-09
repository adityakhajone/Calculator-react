import css from "./styles/App.module.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";
import "./styles/index.css";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText == "C") {
      setCalVal("");
    } else if (buttonText == "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className="back">
      <h1>Calculator</h1>
      <div className={css["cal-container"]}>
        <Display displayValue={calVal} />
        <div className={css["but-container"]}>
          <Buttons onButtonClick={onButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
