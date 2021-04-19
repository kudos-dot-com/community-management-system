import React,{useState,useEffect} from 'react'
import {Link,useLocation} from 'react-router-dom'
import '../../App.css'
import './sidebar.css'
export default function Sidebar()
{
    const location=useLocation();
    const [user,setuser]=useState({});

    useEffect(()=>{
    setuser(JSON.parse(localStorage.getItem('user')));
    },[])

        return (
            <div style={{height:'100vh',width:'100%',background:'#fff'}}>

              <ul>
                  {/* dashboard route */}
                <Link to="/dashboard" className="link">
                    <li id="link" style={{color:location.pathname==='/dashboard'?'#1e90ff':'#7B7B7C'}}>dashboard</li>
                </Link>

                {/* these routes are not in use */}
                  <li id="link" style={{color:'#7B7B7C'}}>college</li>
                  <li id="link" style={{color:'#7B7B7C'}}>courses</li>
                  
                  <Link to="/campus" className="link" >
                      <li id="link" style={{textDecoration:'none',color:'#7B7B7C',textTransform:'capitalize',padding:'15px 15px',fontSize:'15px',fontWeight:'normal'}}>college ambasador</li>
                  </Link>
                  
                  {/* route to Admin task panel or ca task panel */}
                  <Link to={user.role==='admin'?'/admin/addtask':'/ca/task'} className="link">
                      <li id="link" style={{color:location.pathname==='/admin/addtask' || location.pathname==='/ca/task'?'#1e90ff':'#7B7B7C'}}>
                          {user.role==='admin'?`ca's task`:'My task'}
                      </li>
                  </Link>
                  
                  {/*  these routes are not in use */}
                  <li id="link" style={{textDecoration:'none',color:'#7B7B7C',textTransform:'capitalize',padding:'15px 15px',fontSize:'15px',fontWeight:'normal'}}>take action</li>
                  
                  {/* route to submission panel */}

                  <Link to={user.role==='admin'?'/admin/submissions':'/ca/yoursubmission'} className="link">
                      <li id="link" style={{color:location.pathname==='/admin/submissions' || location.pathname==='/ca/yoursubmission'?'#1e90ff':'#7B7B7C'}} >
                          {user.role==='admin'?`submission`:'My submission'}
                      </li>                 
                  </Link>
               
                {/* route not linked yet */}
                  <li id="link" style={{textDecoration:'none',color:'#7B7B7C',textTransform:'capitalize',padding:'15px 15px',fontSize:'15px',fontWeight:'normal'}}>country ambasador</li>
              </ul>

            </div>
        )
    }


