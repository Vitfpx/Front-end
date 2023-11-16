import { useState } from "react";

export default function MyCounter() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  function decrease() {
    setCounter(counter - 1);
  }

  if (counter > 5) {
    return (
      <div>
        <h1>Very high counter</h1>
        <button onClick={increase}>Increase Button</button>
        <button onClick={decrease}>Decrease Button</button>
      </div>
    );
  }

  return (
    <div>
      <h1>My Counter: {counter}</h1>
      <button onClick={increase}>Increase Button</button>
      <button onClick={decrease}>Decrease Button</button>
    </div>
  );
}
