import React,{useState,useEffect} from 'react'
import {Link,useLocation} from 'react-router-dom'
import '../../App.css'
import './sidebar.css'
export default function Sidebar()
{
    const location=useLocation();
    const [user,setuser]=useState({});
    const route=[
        {"admin":"/admin/addtask","campus-ambassador":"/ca/task","organisation":"/organisation/addtask"},
        {"admin":"/admin/submissions","campus-ambassador":"/ca/yoursubmission","organisation":"/organisation/submissions"}
    ]
    console.log();
    useEffect(()=>{
    setuser(JSON.parse(localStorage.getItem('user')).role);
    },[])

        return (
            <div style={{height:'200vh',width:'100%',background:'#fff'}}>

              <ul>
                  {/* dashboard route */}
                <Link to="/dashboard" className="link">
                    <li id="link" style={{color:location.pathname==='/dashboard'?'#1e90ff':'#7B7B7C'}}>dashboard</li>
                </Link>

                {/* admin add organisation route */}
                <Link to="/admin/AddOrganisation" className="link">
                  <li id="link" style={{color:location.pathname==='/admin/AddOrganisation'?'#1e90ff':'#7B7B7C',display:user==='admin'?"block":"none"}}>Add Organisation</li>
                </Link>

                 
                 {/* route to Admin task panel or ca task panel */}
                  <Link to={route[0][user]} className="link">
                      <li id="link" style={{color:location.pathname===route[0][user]?'#1e90ff':'#7B7B7C'}}>
                          {user.role==='admin'?`ca's task`:'My task'}
                      </li>
                  </Link>
                  
                  {/* route t0o submission panel */}

                  <Link to={route[1][user]} className="link">
                      <li id="link" style={{color:location.pathname===route[1][user]?'#1e90ff':'#7B7B7C'}} >
                          {user.role==='admin'?`submission`:'My submission'}
                      </li>                 
                  </Link>
               
               {/* not in use */}
               <li id="link" style={{textDecoration:'none',color:'#7B7B7C',textTransform:'capitalize',padding:'15px 15px',fontSize:'15px',fontWeight:'normal'}}>take action</li>

                  <li id="link" style={{textDecoration:'none',color:'#7B7B7C',textTransform:'capitalize',padding:'15px 15px',fontSize:'15px',fontWeight:'normal'}}>country ambasador</li>
                    <li id="link" style={{color:'#7B7B7C'}}>courses</li>
                  
                    <Link to="/campus" className="link" >
                      <li id="link" style={{textDecoration:'none',color:'#7B7B7C',textTransform:'capitalize',padding:'15px 15px',fontSize:'15px',fontWeight:'normal'}}>college ambasador</li>
                  </Link>
              
              
              </ul>

            </div>
        )
    }


