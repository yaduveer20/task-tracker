import Header from './components/Header.js'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

function App() {
  //load previous tasks from local storage
  const previousTasks = JSON.parse(localStorage.getItem('tasksList-tasktracker'))
  console.log('previous tasks', previousTasks,"hello");
  const initTasks = previousTasks ? [...previousTasks] : []
  console.log('init', initTasks)


  const [tasks, setTasks] = useState(initTasks)
  const [buttonStatus, setButtonStatus] = useState(false)

  //add new Task
  const addTask = (task)=>{
    console.log('before', tasks) 
    setTasks([...tasks , task])
    console.log('after', tasks)
    setButtonStatus(buttonStatus => !buttonStatus)
  }

  //Delete a task
  const onDelete = (id)=>{
    setTasks(tasks.filter(task => task.id !== id))
  }

  //set or remove reminder
  const toggleReminder = (id)=>{
    setTasks(tasks.map(task=> {
      if(task.id === id) task.reminder = !task.reminder
      return task
    }))
  }

  //save tasks to local storage
  console.log('.....saving.....')
  localStorage.setItem('tasksList-tasktracker', JSON.stringify(tasks))
  

  return (
    <div className="container">
      <Header buttonStatus={buttonStatus} setButtonStatus={setButtonStatus} description='First use of props'/>
      {buttonStatus && <AddTask tasks={tasks} addTask={addTask}/>}
      <Tasks tasks={tasks} onDelete={onDelete} onDoubleClick={toggleReminder}/>
    </div>
  );
}

export default App;
