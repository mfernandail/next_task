import { TaskProvider } from '../context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <TaskProvider> 
      <Component {...pageProps} />
    </TaskProvider>
  )
}

export default MyApp;
