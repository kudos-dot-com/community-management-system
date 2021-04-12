import React,{useEffect,useState} from 'react'
import {useLocation,useHistory,Link} from 'react-router-dom'
export default function Mainbar() {
   const [user,setuser]=useState({});
   const location=useLocation();
//    console.log(location.pathname)  
   useEffect(()=>{
    setuser(JSON.parse(localStorage.getItem('user')));

    },[])
    
    return (
        <div>
            
        <h1 style={{fontWeight:'lighter'}}>welcome {user?user.role:""}</h1>
        {
        (user && user.role==="admin")?
        <Link to="/form"><input type="submit" value="Add Campus Ambasador"  style={{height:'35px',width:'40%',background:'#FFFF00',font:'25px',fontWeight:'lighter',outline:'none',borderRadius:'30px',border:'1px solid transparent'}}/>
        </Link>:""
        }
        {
        (user && user.role!=="admin")?
        <div>
        <h3>user Details</h3>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.state}</p>
        <p>{user.city}</p>
        <p>{user.pin}</p>
        <p>{user.country}</p>
        <p>{user.residence}</p>
        <p>{user.dob}</p>
        </div>
        :
        ""
        }

      
        </div>
    )
}
