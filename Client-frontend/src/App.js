// import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Signup from './Signup'
import Dash from './Dashboard'
function App() {
 console.log(localStorage.getItem('token'))
  return (
    <div className="App">
      <div style={{display:localStorage.getItem('token')!==null?'block':'none'}}>
      <Dash />
      </div>
      <br />
      <div style={{display:localStorage.getItem('token')===null?'block':'none'}}>
      <Login />
      </div>
      <br />
       <div style={{display:localStorage.getItem('token')===null?'block':'none'}}>
       <Signup />
       </div>
       <br />
      
    </div>
  );
}

export default App;
