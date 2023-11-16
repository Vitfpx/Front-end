import { useState } from "react";
import style from "../button.module.css"

export default function StylizedCounter() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  return (
    <div className="container">
      <h2>Stylized Counter*</h2>
      <h3>{counter}</h3>
      <button className={style.myButton} onClick={increase}>Increase</button>
    </div>
  );
}
