import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import UncontrolledForm from './UncontrolledForm';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UncontrolledForm />
  </StrictMode>,
);
