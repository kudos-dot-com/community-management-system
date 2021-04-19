import React,{useState,useEffect} from 'react'
import {Link,useLocation} from 'react-router-dom'
import './App.css'
export default function Sidebar()
{
    const location=useLocation();
    const [user,setuser]=useState({});

    useEffect(()=>{
    setuser(JSON.parse(localStorage.getItem('user')));
    
    },[])

        return (
            <div style={{height:'100vh',width:'100%',background:'#fff'}}>

              <ul style={{listStyle:'none',color:'#7B7B7C',fontSize:'10px'}}>
                <Link to="/dashboard" className="link" style={{textDecoration:'none'}}>
                <li id="link" style={{textDecoration:'none',color:location.pathname==='/dashboard'?'#1e90ff':'#7B7B7C',textTransform:'capitalize',padding:'15px 15px',fontSize:'15px',fontWeight:'normal'}}>dashboard</li>
                </Link>

                  <li id="link" style={{textDecoration:'none',color:'#7B7B7C',textTransform:'capitalize',padding:'15px 15px',fontSize:'15px',fontWeight:'normal'}}>college</li>
                  <li id="link" style={{textDecoration:'none',color:'#7B7B7C',textTransform:'capitalize',padding:'15px 15px',fontSize:'15px',fontWeight:'normal'}}>courses</li>
                  
                  <Link to="/campus" style={{textDecoration:'none'}}><li id="link" style={{textDecoration:'none',color:'#7B7B7C',textTransform:'capitalize',padding:'15px 15px',fontSize:'15px',fontWeight:'normal'}}>college ambasador</li>
                  </Link>
                  
                  <Link to={user.role==='admin'?'/admin/addtask':'/ca/task'} style={{textDecoration:'none'}}>
                      <li id="link" style={{textDecoration:'none',color:location.pathname==='/admin/addtask' || location.pathname==='/ca/task'?'#1e90ff':'#7B7B7C',textTransform:'capitalize',padding:'15px 15px',fontSize:'15px',fontWeight:'normal'}}>{user.role==='admin'?`ca's task`:'My task'}</li>
                  </Link>
                  
                  
                  <li id="link" style={{textDecoration:'none',color:'#7B7B7C',textTransform:'capitalize',padding:'15px 15px',fontSize:'15px',fontWeight:'normal'}}>take action</li>
                  
                  <Link to={user.role==='admin'?'/admin/submissions':'/ca/yoursubmission'} style={{textDecoration:'none'}}>
                      <li id="link" style={{textDecoration:'none',color:location.pathname==='/admin/submissions' || location.pathname==='/ca/yoursubmission'?'#1e90ff':'#7B7B7C',textTransform:'capitalize',padding:'15px 15px',fontSize:'15px',fontWeight:'normal'}}>{user.role==='admin'?`submission`:'My submission'}</li>                 
                  </Link>
               
                
                  <li id="link" style={{textDecoration:'none',color:'#7B7B7C',textTransform:'capitalize',padding:'15px 15px',fontSize:'15px',fontWeight:'normal'}}>country ambasador</li>
              </ul>

            </div>
        )
    }


