import React,{useEffect,useState} from 'react'
import {useLocation,useHistory,Link,Redirect } from 'react-router-dom'
import OrgDashboard from '../Organisation/OrgDashboard'
import  AdminDashboard from '../Admin/AdminDashboard'
import CampusDashboard from '../Campus/CampusDashboard'


export default function Mainbar() {
   const [user,setuser]=useState({});
   const location=useLocation();  
   const history = useHistory();
   useEffect(()=>{
    setuser(JSON.parse(localStorage.getItem('user')));

    },[])
    
    function onsubmit()
    {  
         localStorage.clear('user');
        localStorage.clear('token')
        history.push('/login');
        
    }
    return (
        <div  style={{width:'100%',display:'block'}}>

        <div style={{width:"96%",display:"block",marginLeft:"15px"}}>    
        
        <div className="d-flex justify-content-between my-1">
        <h4 style={{display:'block',fontWeight:'lighter',paddingLeft:'5px'}}>welcome {user?user.name:""} ~ ({ user?user.role:""})</h4>
        <button onClick={onsubmit} class="btn btn-info" style={{display:'block',width:'20%'}}>Logout</button> 
        </div>
        {
        (user && user.role==="admin")?
        <AdminDashboard/>:""
        }
         {
        (user && user.role==="campus-ambassador")?
        <CampusDashboard user={user} />:""
        }
        {
        (user && user.role==="organisation")?
        <OrgDashboard/>:""
        }
        </div>
        </div>
      
     
    )
}
