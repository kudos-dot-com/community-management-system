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
        <div  style={{width:'100%',display:'block'}}>

        <div style={{width:"96%",display:"block",marginLeft:"15px"}}>    
        <h4 style={{fontWeight:'lighter',margin:'auto',padding:'5px'}}>welcome {user?user.role:""}</h4>
        <div style={{width:'100%',display:'block',background:'#fff',padding:"10px"}}>
        <h4 style={{margin:'15px',fontWeight:"bold",fontSize:'15px'}}>About {user?user.role:""}</h4>
        <p style={{fontSize:"14px",color:"#333",margin:'15px'}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
        {
        (user && user.role==="admin")?
        <Link to="/form">
        <a class="waves-effect waves-light btn" style={{width:'40%'}}>Add Campus Ambassador</a> 

        {/* <input type="submit" value="Add Campus Ambasador"  style={{height:'35px',width:'40%',background:'#FFFF00',font:'25px',fontWeight:'lighter',outline:'none',borderRadius:'30px',border:'1px solid transparent'}}/> */}
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
        </div>
      
        </div>
    )
}
