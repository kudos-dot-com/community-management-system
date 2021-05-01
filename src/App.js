import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import './App.css';

//Redux;
import { useDispatch } from 'react-redux';

//Components;

//Pages;
import DashBoard from './Pages/DashBoard/DashBoard';
import Error from './Pages/Error/Error';
import Login from './Pages/Login/Login';

// const Test = () => {
//   return(
//     <div>This is test Pages</div>
//   )
// }


function App() {
  const is_logged = useSelector(state => state.is_logged);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    
    if(user?.status === 'Active'){
      console.log('Is Logged Triggered');
       return dispatch({
        type:"SET_LOGGED",
    });
    }
    else if(is_logged){
      console.log('This is LogOut Action');
      return dispatch({
        type:"SET_LOGGED"
      })
    }
  }, [user])
  return (
    <div className="app">
      <Switch>
        <Route path = '/login' exact render = {props => is_logged ? <Redirect to = '/dash' /> : <Login {...props} />  } />
        <Route path = '/dash' render = {(props) => is_logged ? <DashBoard {...props} /> : <Redirect to = '/login' /> } />
        <Route path = '/error' exact component = {Error} />
        <Route path = '*' render = {()=><Redirect to = '/error' />} />
      </Switch>
    </div>
  );
}

export default App;
