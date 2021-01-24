import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App text={"Hello from react"} />
  </React.StrictMode>,
  document.getElementById('root')
);
