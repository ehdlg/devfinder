import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './context/ThemeProvider.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <Toaster richColors position='top-right' />
    <App />
  </ThemeProvider>
);
