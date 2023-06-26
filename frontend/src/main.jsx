import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './assets/App.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <h1 className='logo'>Sigma ~ Todo</h1>
    </header>
    <section className='app'>
      <App />
    </section>
    <footer>
      <h3 className='credits'>Developed and designed by <span className='company'>Sigma Software Solution</span></h3>
    </footer>
  </React.StrictMode>
);