import ReactDOM from 'react-dom/client';
import { inject } from '@vercel/analytics';
import Router from './Router';
import './styles/globalStyles.css';

inject();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router />
);
