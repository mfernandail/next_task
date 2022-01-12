import Form from '../components/Form';
import Layout from '../components/Layout';

function TaskFromPage() {  
  return (
    <Layout pageTitle="New Task">
      <div className="flex justify-center items-center h-full">
        <Form />
      </div>
    </Layout>
  )
}

export default TaskFromPage;
