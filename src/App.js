import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login'
import Dashboard from './Dashboard'
import Form from './From'
function App() {
  return (
    <div className="App">
    <Router>
      <div>       
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard/>
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/form">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
