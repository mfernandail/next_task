import { createContext, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

export const TaskProvider = ({children}) => {
  const [task, setTask] = useState([{id: '1', title: 'Hola', description: 'Mundo'}]);

  const createTask = ({title, description}) => {
    setTask([...task, {title, description, id: uuid()}])
  }

  const editTask = (id, taskUpdate) => {
    const updateTask = task.map(t => t.id === id ? {...t, ...taskUpdate} : t);
    setTask(updateTask);
  }

  const deleteTask = id => {
    const updateTask = task.filter(t => t.id !== id);
    setTask(updateTask);
    console.log(id)
  }
  
  return (
    <TaskContext.Provider  
      value={{ 
        task,
        createTask,
        editTask,
        deleteTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}