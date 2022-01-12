# Simple aplicaion

## Tip: 
- Para guardar datos actualizados en un nuevo objeto, se pasa una compia del objeto original y despyes una copia del objeto que se actualizara, asi no se sobre escribe el objeto original y se conservan los valores que la copia no tiene.
  ~~~
  updateTask = {...task, ...taskUpdate}
  ~~~
- Para actualizar un state, se puede hacer de dos formas:
  - Realizando una copia del objeto original:
      ~~~
      setTask([...task.filter(task => task.id !== id)]);
      ~~~
  - Creando una nueva variable que tendra el resultado final:
      ~~~
      const updateTask = task.filter(t => t.id !== id);
      setTask(updateTask);
      ~~~