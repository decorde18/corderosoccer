import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const dev = true;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {dev ? <h1>Nothing to see here</h1> : <App />}
  </React.StrictMode>
);
