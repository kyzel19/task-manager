import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from './taskSlice';

function App() {
  const [input, setInput] = useState(''); // Local state for the input box
  const tasks = useSelector((state) => state.tasks); // Grab tasks from Redux
  const dispatch = useDispatch(); // The "messenger" to send actions

  const handleAdd = () => {
    if (input.trim() !== "") { // Prevent empty tasks
      dispatch(addTask(input));
      setInput(''); // Clear input after adding
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>🚀 Task Logger</h1>
      
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="What needs to be done?"
      />
      <button onClick={handleAdd}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;