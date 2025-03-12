import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// disable strict mode for this app
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
