import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { App } from './App';
import { RecoilRoot } from 'recoil';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <App />
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);
