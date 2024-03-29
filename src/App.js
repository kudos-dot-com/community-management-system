import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Form from "./components/CampusForm/From";
import OrgForm from "./components/OrganisationForm/OrgForm";
import AdminTask from "./pages/Admin/AdminTask";
import AdminAddOrg from "./pages/Admin/AdminAddOrg"
import CampusTask from "./pages/Campus/CampusTaskPanel";
import AdminSub from "./pages/Admin/AdminSubmission";
import CaSub from "./pages/Campus/CaSubmission";
import OrgSub from "./pages/Organisation/OrganisationSubmission"
import OrgTask from "./pages/Organisation/OrganisationTask"
import AddTask from "./pages/AddTask/AddTask"

import { useSelector } from "react-redux";
function App() {
  const is_logged = useSelector(state => state.is_logged);
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render ={ () => is_logged ? <Redirect to ='/' /> : <Login />} />

        <Route exact path='/login' >
          <Login />
        </Route>
        <Route exact path='/form' render ={ () => is_logged ? <Form />:<Redirect to ='/' />} />
        <Route exact path='/Addtask' render ={ () => is_logged ? <AddTask />:<Redirect to ='/' />} />

        <Route exact path='/organisation-form' render ={ () => is_logged ? <OrgForm />:<OrgForm />} />

        <Route exact path='/dashboard' render={ () => is_logged ? <Dashboard /> :<Redirect to ='/' />} />
        <Route exact path='/admin/AddOrganisation' render={ () => is_logged ? <AdminAddOrg /> :<Redirect to ='/' />} />

        <Route exact path='/ca/task' render={ () => is_logged ? <CampusTask /> :<Redirect to ='/' />} />
        <Route path='/ca/yoursubmission' render={ () =>  is_logged ? <CaSub /> :<Redirect to ='/' />} />
        <Route exact path='/admin/addtask' render={ () => is_logged ? <AdminTask /> :<Redirect to ='/' />} />
        <Route exact path='/admin/submissions' render={ () => is_logged ? <AdminSub /> :<Redirect to ='/' />} />

        <Route exact path='/organisation/addtask' render={ () => is_logged ? <OrgTask /> :<Redirect to ='/' />} />
        <Route exact path='/organisation/submissions' render={ () => is_logged ? <OrgSub /> :<Redirect to ='/' />} />
      
      
      </Switch>
    </div>
  );
}

export default App;
