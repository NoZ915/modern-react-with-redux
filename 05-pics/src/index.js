import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import searchImages from './api.js';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App />);