import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';

function Layout({children}) {

  return (
    <div className="h-screen bg-gray-900 text-white">
      <header className="flex bg-gray-800 text-white px-28 py-5">

        <Link href="/">
          <a><h1 className="font-black text-lg">Task App</h1></a>
        </Link>
        
        <div className="flex-grow text-right">
          <Link href="/new">
            <a>
              <button 
                className="bg-green-500 px-3 py-2 text-black rounded hover:bg-green-400 inline-flex items-center"
              >
                  <AiOutlinePlus className="mr-2" />
                  Add Task
              </button>
            </a>
          </Link>
        </div>

      </header>
      
      <main className="px-28 ">
        {children}
      </main>

    </div>
  )
}

export default Layout;
