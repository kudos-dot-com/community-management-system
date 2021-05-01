import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Redux;
import {store} from './Redux/store';

//React-router-dom
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback = {<div>This is loading</div>} >
      <React.StrictMode>
        <Router>
            <App />
        </Router>
      </React.StrictMode>
      </Suspense>
    </Provider>,
  document.getElementById('root')
);
