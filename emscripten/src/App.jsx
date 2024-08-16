import { useState, useEffect } from 'react';
import './App.css';
import createAddModule from './dist/add.mjs';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);
  const [Module, setModule] = useState(null);

  useEffect(() => {
    // Create the Emscripten module
    createAddModule().then((mod) => {
      setModule(mod);
    });
  }, []);

  const handleAdd = () => {
    if (Module) {
      const sum = Module._add(num1, num2);
      setResult(sum);
    }
  };

  return (
    <div>
      <h1>React and Emscripten Example</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="First number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Second number"
      />
      <button onClick={handleAdd}>Add</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default App;
