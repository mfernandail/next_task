import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTask } from '../context';

function Form() {
  const {createTask, editTask, task} = useTask();
  const router = useRouter();
  const id = router.query.id;

  const [taskForm, setTaskForm] = useState({
    title: '',
    description: ''
  });

  const {title, description} = taskForm;
  
  const handleChange = e => {
    setTaskForm({
      ...taskForm,
      [e.target.name]: e.target.value
    });    
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    if(id) {
      editTask(id, taskForm);
    } else {
      createTask(taskForm);
    }
    router.push('/');
  }

  useEffect(() => {
    if(id) {
      const formData = task.find(t => t.id === id);
      setTaskForm({title: formData.title, description: formData.description});
    }
  }, [id, task]);

  return (
    <form onSubmit={handleSubmit} className="bg-gray-700 p-10 h-2/4">
        <h1 className="text-3xl mb-7">{ id ? "Update a Task" : "Add a Task"}</h1>
        <input
          type="text"
          name="title"
          placeholder="Write a title"  
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"      
          value={title}
          onChange={handleChange}
        />
        <textarea
          rows="2"
          name="description"
          placeholder="Write a description"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"      
          value={description}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-green-500 text-black hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30"
          disabled={!taskForm.title}
        >
          { id ? "Update" : "Save"}
        </button>
      </form>
  )
}

export default Form;
