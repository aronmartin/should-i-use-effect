import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@should-i-use-effect/ui/styles.css';

// disable strict mode for this app
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
