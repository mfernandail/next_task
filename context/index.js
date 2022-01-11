import { createContext, useContext } from 'react';

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  return context;
}

export const TaskProvider = ({children}) => {
  let hello = 'mundo';
  return (
    <TaskContext.Provider  value={{ hello }}>
      {children}
    </TaskContext.Provider>
  )
}