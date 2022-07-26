import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import {useState} from 'react';



function App() {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2']); //make use state that is an empty array
  //we need a function that will handle the submission of the TaskForm
  //AND update the tasks that display in the UI
  const handleSubmit = (text) => {
    setTasks([...tasks, text]);
    console.log('Form submitted!');
  }

  return (
    <div className="App">
      <Banner />
      {/* Functions can be passed as props in React! */}
      <TaskForm handleSubmit={handleSubmit}/>
      {/* tasks is the key. The key is the name of the variable in the next file. What goes in the "{...}" is what the VALUE of that variable will be in the next file. This is a PROP in React.
      *
      *The line below means "I want a variable called 'tasks' for use in the TaskList component." */}
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
