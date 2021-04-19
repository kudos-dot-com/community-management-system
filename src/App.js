import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Auth/Login'
import Dashboard from './Dashboard'
import Form from './From'
import AdminTask from './AdminTask'
import CampusTask from './CampusTaskPanel'
import AdminSub from './AdminSubmission'
import CaSub from './CaSubmission'
function App() {
  return (
    <div className="App">
    <Router>
      <div>       
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard/>
          </Route>

          <Route exact path="/ca/task">
            <CampusTask/>
          </Route>

          <Route path="/ca/yoursubmission">
            <CaSub/>
          </Route> 
          
          <Route exact path="/admin/addtask">
            <AdminTask/>
          </Route>

          <Route exact path="/admin/submissions">
            <AdminSub/>
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
