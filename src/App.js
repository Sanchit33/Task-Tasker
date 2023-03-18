import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';
function App() {
  // const vr = "sanchit";
  // const x = false;
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Food Shopping',
      day: 'feb 5th at 2:30pm',
      reminder: false,
    },
    {
      id:2,
      text: 'F Shopping',
      day: 'feb 5th at 2:30pm',
      reminder: false,
    },
    {
      id:3,
      text: 'Fo Shopping',
      day: 'feb 5th at 2:30pm',
      reminder: false,
    },
    {
      id:4,
      text: 'Foo Shopping',
      day: 'feb 5th at 2:30pm',
      reminder: false, 
    },
  ])

// Add Task
  const addTask = (task) =>{
    const id = Math.floor(Math.random()*10000)+1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    
  }

// delete Task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
// Toggle Reminder
  const toggleReminder = (id)=>{
    setTasks(
      tasks.map((task)=>
        task.id === id ? { ...task, reminder:
        !task.reminder} : task
      )
    )
  }

  return (
    <div className="container">
      {/* <h1>Hello {x ? "Yes":"No"}</h1>
      <h1>hello {vr}</h1> */}
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />: ("No Task To Show")}
    </div>
  );
}

export default App;
