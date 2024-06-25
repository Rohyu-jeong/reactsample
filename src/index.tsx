import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style/reset.css";
import "./style/hover.css"; 
import './style/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);