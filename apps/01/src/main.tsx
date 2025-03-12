import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// removed strict mode for now, because it causes double renders
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <div className="min-h-screen flex flex-col items-center justify-center">
    <App />
  </div>
  // </React.StrictMode>
);
