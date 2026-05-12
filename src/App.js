import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from './taskSlice';
import './App.css'; // Don't forget to import the CSS!

function App() {
  const [input, setInput] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <div className="container">
      <h1>🚀 Task Logger</h1>
      
      <div style={{ display: 'flex' }}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="New task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;