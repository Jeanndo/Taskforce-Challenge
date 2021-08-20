import React from 'react';
import ReactDOM from 'react-dom';
import './ui.css';
import 'antd/dist/antd.css'; 
import App from './App';
import Root from './Root';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
