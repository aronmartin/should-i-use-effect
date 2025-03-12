import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// removed strict mode to avoid double render
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
