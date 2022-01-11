import { createContext, useContext, useState } from 'react';

export const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

export const TaskProvider = ({children}) => {
  const [task, setTask] = useState([{id: 'id', title: 'Titulo', desc: 'Desc'}]);
  
  return (
    <TaskContext.Provider  
      value={{ 
        task,
        setTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}