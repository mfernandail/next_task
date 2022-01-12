import Layout from '../components/Layout';
import Tasks from '../components/Tasks';
import { useTask } from '../context';

export default function Home() {  
  const {task} = useTask();

  return (
    <Layout pageTitle="Home">
      <div className="flex justify-center">
      {
        task?.length > 0 
          ?
            <div className="w-7/10">
              {task.map((t, i) => (
                <Tasks
                  key={t.id}
                  index={i}
                  task={t}
                />
              ))}
            </div>
          :
          <div className="block">
            <h2 className="text-2xl">There are no tasks</h2>
          </div>
      }
      </div>
    </Layout>
  )
}
