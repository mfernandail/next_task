import { createContext, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

export const TaskProvider = ({children}) => {
  const [task, setTask] = useState([]);

  const createTask = ({title, description}) => {
    setTask([...task, {title, description, id: uuid()}])
  }
  
  return (
    <TaskContext.Provider  
      value={{ 
        task,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}