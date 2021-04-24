import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "./Redux/store";
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
          <App />
      </Router>
    </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);



