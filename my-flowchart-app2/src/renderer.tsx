import './index.css';
import React from 'react';
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from './component/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
)