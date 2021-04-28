import React from 'react'
import {useLocation,useHistory,Link} from 'react-router-dom'
import OrgPanel from '../../components/OrganisationFilterForAdmin/OrgFilter'
import Sidebar from '../../components/Sidebar/Sidebar'
function AdminAddOrg() {
    return (
        <div style={{width:'100%',height:'100%',display:'flex',background:"#dfe4ea"}}>
            
        <div style={{width:'20%',height:'100%'}}>
            <Sidebar />
        </div>

    <div style={{width:'100%',height:'100%'}}>
        <div  style={{width:'100%',display:'block'}}>
            <div style={{width:"96%",display:"block",marginLeft:"15px"}}>    
            <h4 style={{fontWeight:'lighter',margin:'auto',padding:'5px'}}>Add Organisation</h4>
                <div style={{width:'100%',display:'block',background:'#fff',padding:"10px"}}>
                  <h4 style={{margin:'15px',fontWeight:"bold",fontSize:'15px'}}>About Organisation</h4>
                    <p style={{fontSize:"14px",color:"#333",margin:'15px'}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>

                <Link to="/organisation-form">
                    <a class="btn btn-info" style={{width:'40%'}}>Add Organisation</a> 
                </Link>
                </div>
                
                <br /><br />

               
                <OrgPanel/>
            <div >
            </div>               
        </div>
  
        </div>
    </div>
            
</div>
    )
}

export default AdminAddOrg
