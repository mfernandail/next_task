import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/Layout';
import { useTask } from '../context';

function TaskFromPage() {
  const {createTask} = useTask();
  const router = useRouter();

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
    createTask(taskForm);
    router.push('/');
  }

  return (
    <Layout pageTitle="New Task">
      <form onSubmit={handleSubmit}>
        <h1>Add a Task</h1>
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
          Save Task
        </button>
      </form>
    </Layout>
  )
}

export default TaskFromPage;
