import { useState } from "react";

function Hooks() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Hooks + Functional Components</h2>
      <h3>The current count is: {count}</h3>
      <br></br>
      <button onClick={() => setCount(count + 1)} >Increase</button>
      <button onClick={() => setCount(count - 1)} >Decrease</button>
    </div>
  );
}

export default Hooks;
