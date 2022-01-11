import Layout from '../components/Layout';
import { useTask } from '../context';

function TaskFromPage() {
  const {task} = useTask();
  console.log(task)
  return (
    <>
      <Layout>
        <h1>New</h1>

        <div>
          {
            task.map(t => (
              <p key={t.id}>{t.title}</p>

            ))
          }      
        </div>
      </Layout>
    </>

  )
}

export default TaskFromPage;
