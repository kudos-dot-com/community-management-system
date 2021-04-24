import React,{useEffect,useState} from 'react'
import {useLocation,useHistory,Link} from 'react-router-dom'
// import UserPanel from '../Campus/CampusUsers'
import  AdminDashboard from '../Admin/AdminDashboard'
import CampusDashboard from '../Campus/CampusDashboard'
export default function Mainbar() {
   const [user,setuser]=useState({});
   const location=useLocation();  
   useEffect(()=>{
    setuser(JSON.parse(localStorage.getItem('user')));

    },[])
    
    return (
        <div  style={{width:'100%',display:'block'}}>

        <div style={{width:"96%",display:"block",marginLeft:"15px"}}>    
        <h4 style={{fontWeight:'lighter',margin:'auto',padding:'5px'}}>welcome {user?user.role:""}</h4>
        {
        (user && user.role==="admin")?
        <AdminDashboard/>:""
        }
         {
        (user && user.role==="campus-ambassador")?
        <CampusDashboard user={user} />:""
        }
       
        </div>
        </div>
      
     
    )
}
