import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import {useLocation,useHistory,Link} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'

function SubmissionTable(task) {
    // console.log(task.task);
    const [des,setdes]=useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow=(data) => {setdes(data); setShow(true)};

    const tableStyle={
      textAlign:"center",
      padding:'10px 0px',
      borderBottom:'1px solid #ccc'
  }
    const submit=(data)=>{
        console.log(data.title + " " + data.user._id);

        fetch("http://localhost:4000/tasks/ca-update-task",{
      method:"put",
      headers:{
          "Content-Type":"application/json",
          Authorization:"Bearer "+localStorage.getItem("token")
      },
      body:JSON.stringify({
        _id:data.user._id,  
        title:data.title
      })
  })
  .then(res=>res.json())
  .then(res=>{
      console.log(res);
    window.location.reload();
  })
  .catch(err=>{
    console.log(err);
  })
}   
function Popup()
{
    return (
        <div>
             <Modal show={show} onHide={handleClose}>
             <Modal.Header closeButton>
                 <Modal.Title>task description</Modal.Title>
             </Modal.Header>
             <Modal.Body>{des}</Modal.Body>
              <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
             Close
          </Button>
         <Button variant="primary" onClick={handleClose}>
             Save Changes
          </Button>
          </Modal.Footer>
   </Modal>
            </div>
    )
}
    return (
        <div>
                <table style={{width:'100%'}}>
                    <tr>
                        <th style={tableStyle}>Title</th>
                        <th style={tableStyle}>Description</th>
                        <th style={tableStyle}>Media Link</th>
                        <th style={tableStyle}>Points Alloted</th>
                        <th style={tableStyle}>Name</th>
                        <th style={tableStyle}>Email</th>
                        <th style={tableStyle}>time of submission</th>
                        <th style={tableStyle}>Action</th>
                      
                     </tr>
                     {task.task.map(data=>{
                        return (
                           
                           <tr>
                           
                                <td style={tableStyle}>{data.title}</td>
                               
                                <td style={tableStyle}>
                                <button className="btn btn-info"  onClick={(e)=>handleShow(data.description)}>View</button>

                                  {/* {data.description} */}
                                  </td>
                                <td style={tableStyle}><Link to={{ pathname:`${data.media}` }} target="_blank" ><Button className="btn btn-info">Click Here</Button></Link></td>
                                <td style={tableStyle}>{data.points}</td>
                                <td style={tableStyle}>{data.user?data.user.name:"no name"}</td>
                                <td style={tableStyle}>{data.user?data.user.email:"no email"}</td>
                                <td style={tableStyle}>{data.updatedAt}</td>
                                <td style={tableStyle}><button  onClick={()=>submit(data)} id={data._id}  className="btn btn-info">{data.status==="not approved"?"Approve":"Approved"}
                                </button>
                                </td>
                               
                            </tr>
                           
                            )
                    
                    })}
                </table>
            <Popup />
            </div>
    )
}

export default SubmissionTable
