import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import { NavProvider } from './context/NavContext.tsx';

createRoot(document.getElementById('root')!).render(
  <NavProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NavProvider>
);