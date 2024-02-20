'use client'

import { useState } from "react";


export default function Page() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');
  const [checkedTasks, setCheckedTasks] = useState({});

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setList(
      [
        ...list,
        task
      ]);
  };

  const handleCheck = (task) => {
    setCheckedTasks(checkedTasks => ({
      ...checkedTasks,
      [task] : !checkedTasks[task]
    }));
  }



  return (
    <div>
      <h1 className="text-center">ToDo List page</h1>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center m-3 space-y-5">
          <label htmlFor="task">Task</label>
          <input type="text" id="task" name="task" className="text-black" onChange={handleChange}></input>
          <input type="submit" value="Submit" className="bg-green-800 text-white p-3"></input>
        </form>
      </div>
      <div>
        <ul>
          {list.map(task => (
            <form key={task}>
              <input type="checkbox" id="taskCheck" name="task" onChange= {() => handleCheck(task)} />
              <label htmlFor="taskCheck" className={`${checkedTasks[task] ? 'text-gray-500' : ''}`}>{task}</label>
            </form>
          ))}
        </ul>
      </div>
    </div>
  )
}
