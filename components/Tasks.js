import { useRouter } from 'next/router';
import { VscTrash } from 'react-icons/vsc';
import { useTask } from '../context';

function Tasks({index, task}) {
  const router = useRouter();

  const {deleteTask} = useTask();

  const handleDelete = id => {
    deleteTask(id);
  }
  return (
    <article
      className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-start"
      onClick={()=> router.push(`/edit/${task.id}`) }
    >      
      <span className="text-5xl mr-5">{index}</span>
      <div>
        <div className="w-full">
          <div className="flex justify-between">
            <h1 className="font-bold">{task.title}</h1>
            <button
              className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
              onClick={e => {
                e.stopPropagation();
                handleDelete(task.id);
              }}
            >
              <VscTrash className="mr-2 " />
              Delete
            </button>
          </div>
          <p className="text-gray-300">{task.description}</p>
          <span className="text-gray-400">{task.id}</span>
          </div>
      </div>
    </article>
  )
}

export default Tasks;
