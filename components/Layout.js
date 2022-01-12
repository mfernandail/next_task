import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlinePlus } from 'react-icons/ai';

function Layout({children}) {
  const router = useRouter();

  const handleNew = () => {
    router.push('/new');
  }

  return (
    <div className="h-screen bg-gray-900 text-white">
      <header className="flex bg-gray-800 text-white px-28 py-5">

        <Link href="/">
          <a><h1 className="font-black text-lg">Task App</h1></a>
        </Link>
        
        <div className="flex-grow text-right">
          <button 
            className="bg-green-500 px-3 py-2 text-black rounded hover:bg-green-400 inline-flex items-center"
            onClick={handleNew}
          >
              <AiOutlinePlus className="mr-2" />
              Add Task
          </button>
        </div>

      </header>
      
      
      <main className="px-28 ">
        {children}
      </main>

    </div>
  )
}

export default Layout;
