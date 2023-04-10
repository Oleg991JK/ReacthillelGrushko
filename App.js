
import { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import UniqueId from './uniqueId';

function App() {
  const nextId = UniqueId();
  const  [toDos, setTodos] = useState([])
  const [ToDoTask, SetToDoTask] = useState('')
    function addTask() {
      setTodos([
        ...toDos,
        {
          id: nextId(),
          title: ToDoTask,
          completed: false
        }
        
      ])
      SetToDoTask('')
    }
  return (
      <div className='wrapper'>
        <h1>Todo list</h1>
        <div className='todo-input'>
          <input 
          type="text"
          value={ToDoTask}
          onChange={evt => SetToDoTask(evt.target.value)} />
          <button onClick={addTask}>Add Task</button>
        </div>
        <ToDoList todos={toDos}/>
        </div>
  );
}

export default App;
