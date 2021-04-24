import React from 'react'
function CampusDashboard(user) {
    // console.log(props);
    console.log(user)
    return (
        <div>
            <div style={{width:'100%',display:'block',background:'#fff',padding:"10px"}}>
                <h4 style={{margin:'15px',fontWeight:"bold",fontSize:'15px'}}>About Camous Ambassador</h4>
                         <p style={{fontSize:"14px",color:"#333",margin:'15px'}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.          </p>
                <div>
                    <div>
                 <h3>user Details</h3>
                 <p>{user.user.name}</p>
                 <p>{user.user.email}</p>
                 <p>{user.user.state}</p>
                 <p>{user.user.city}</p>
                 <p>{user.user.pin}</p>
                 <p>{user.user.country}</p>
                 <p>{user.user.residence}</p>
                 <p>{user.user.dob}</p>
                </div>
        
                </div>
            
        
            </div>
      </div>
     
    )
}

export default CampusDashboard
