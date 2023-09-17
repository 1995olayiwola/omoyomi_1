import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parse from 'parse';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyErrorBoundary from './components/MyErrorBoundary'
Parse.initialize('akanjiOla');
Parse.serverURL = 'https://dreamserver.onrender.com/parse';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyErrorBoundary>
    <App />
  </MyErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
