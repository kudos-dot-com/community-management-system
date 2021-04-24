import React from 'react'
import {useLocation,useHistory,Link} from 'react-router-dom'
import UserPanel from '../../components/CampusFilterForAdmin/CampusUsers'

function AdminDashboard() {
    return (
    <div>
           <div style={{width:'100%',display:'block',background:'#fff',padding:"10px"}}>
            <h4 style={{margin:'15px',fontWeight:"bold",fontSize:'15px'}}>About Admin</h4>
            <p style={{fontSize:"14px",color:"#333",margin:'15px'}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
        
        <Link to="/form">
            <a class="btn btn-info" style={{width:'40%'}}>Add Campus Ambassador</a> 
        </Link>
        
            </div>
        <br />
        <UserPanel />
     </div>
    )
}

export default AdminDashboard
