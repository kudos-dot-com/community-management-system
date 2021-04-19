import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Auth/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Form from './components/CampusForm/From'
import AdminTask from './pages/Admin/AdminTask'
import CampusTask from './pages/Campus/CampusTaskPanel'
import AdminSub from './pages/Admin/AdminSubmission'
import CaSub from './pages/Campus/CaSubmission'
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

         

         
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
