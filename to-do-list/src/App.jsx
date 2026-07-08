import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1>My Todo List</h1>
      <input placeholder="Enter a task..."
      value={task} 
      onChange={(e) => setTask(e.target.value)} />
      <button
      onClick={() => {
        setTasks([...tasks, task]);
        setTask("");
      }}
      >Add</button>
     {tasks.map((task, index) => 
     (<div key={index}>
      <p>{task}</p>
      <button 
      onClick={() => {(setTasks(tasks.filter((_, i) => i !== index (task === ""))))}}>
        Delete
      </button>
      </div> ))};

    </div>
  );
}

export default App;

