import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Toaster richColors position='top-right' />
    <App />
  </>
);
