import React,{useEffect,useState,useRef} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import {useLocation,useHistory,Link} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'

function CampusTaskPanel() {
    const FormModal=useRef(null);
    const [user,setuser]=useState(JSON.parse(localStorage.getItem('user')));
    const location=useLocation();
    const [task,settask]=useState([]);
    const [data,usedata]=useState();
    const title=useRef("");
    const [tagged,settag]=useState("");
    // for modal
    const [des,setdes]=useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (tag,data) =>
    {   tag==="1"?setdes(data):usedata(data);
        settag(tag);
        setShow(true);
    }
    useEffect(()=>{
        const addedBy=user.addedByOrg?"organisation":"admin";
        console.log(addedBy); 
        if(!user)
        {return;}
        else
        {
        fetch(`http://localhost:4000/tasks/get-${addedBy}-task`,{    
            headers:{
                    Authorization:"Bearer "+localStorage.getItem("token")
                }
            })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            settask(data.success);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    },[user])
    const labelstyle={
        display:'block',   
        textTransform:'capitalize',
        fontSize:'15px',
        marginLeft:'10px',
        color:'#333'
        }   
        
        
        const fieldstyle={
            width:'90%',
            padding:'0px 20px',
            height:"30px",
            borderBottom:'2px solid #0007',
            border:'1px solid transparent',
            outline:'none',
            display:'block',
            margin:'auto',
            background:'#ddd',
            zIndex:"1000 !important"
        }

        const tableStyle={
            textAlign:"center",
            padding:'10px 0px',
            borderBottom:'1px solid #ccc'
        }
    function Form()
    {
        return (
            <div>
               <>
                <div >
                    <label for="fname" style={labelstyle}>* drive link :</label> <br />
                    <input type="text" placeholder="Title of your task" ref={title} style={fieldstyle} /><br /> <br />
                </div>
               </>
            </div>
        )
    }
    function submit()
    {
        const addedBy=user.addedByOrg?"organisation":"admin";
        console.log(addedBy); 
        handleClose();

        // console.log(title.current.value + description.current.value + points.current.value);
        fetch(`http://localhost:4000/tasks/ca-add-task-${addedBy}`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+localStorage.getItem("token")

            },
            body:JSON.stringify({
                title:data.title,
                description:data.description,
                points:data.points,
                media:title.current.value,
            })
        })
        .then(res=>res.json())
        .then(data=>{
         console.log(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    function Popup()
    {console.log(tagged);
        return (
            <div>
                 <Modal show={show} onHide={handleClose}>
                 <Modal.Header closeButton>
                     <Modal.Title>task description</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                     {tagged==='1'?des:<Form />}
                </Modal.Body>
                  <Modal.Footer>
             <Button variant="secondary" onClick={handleClose}>
                 Close
              </Button>
             <Button variant="primary" onClick={submit}>
                 Save Changes
              </Button>
              </Modal.Footer>
           </Modal>
                </div>
        )
    }
    function Tasks()
    {
        return (
            <div>
                <table style={{width:'100%',overflow:'scroll'}}>
                    <tr>
                        <th style={tableStyle}>Title</th>
                        <th style={tableStyle}>Description</th>
                        <th style={tableStyle}>Points Alloted</th>
                        <th style={tableStyle}>Posted On</th>
                        <th style={tableStyle}>Posted By</th>
                        <th style={tableStyle}>Submit</th>
                     </tr>
                {
                    task.map(data=>{
                        return (
                            <tr>
                                <td style={tableStyle}>{data.title}</td>
                                <td style={tableStyle}>
                                <button className="btn btn-info"  onClick={(e)=>handleShow("1",data.description)}>View</button>
                                 </td>
                                <td style={tableStyle}>{data.points}</td>
                                <td style={tableStyle}>{data.updatedAt}</td>
                                <td style={tableStyle}>{data.role}</td>
                                <td style={tableStyle}>
                                    <button  onClick={()=>{handleShow("2",data)}}  className="btn btn-info">Submit</button>
                                </td>

                            </tr>
                                );
                    })
                }
                </table>
                 
            </div>
        )
    }
    return (
    <div style={{width:'100%',height:'100%',display:'flex',background:"#dfe4ea"}}>
            
            <div style={{width:'20%',height:'100%'}}>
                <Sidebar />
            </div>

        <div style={{width:'100%',height:'100%'}}>
            <div  style={{width:'100%',display:'block'}}>
                <div style={{width:"96%",display:"block",marginLeft:"15px"}}>    
                <h4 style={{fontWeight:'lighter',margin:'auto',padding:'5px'}}>welcome {user?user.role:""}</h4>
                    <div style={{width:'100%',display:'block',background:'#fff',padding:"10px"}}>
                      <h4 style={{margin:'15px',fontWeight:"bold",fontSize:'15px'}}>{user && user.role==="admin"?"Add New Task":"View Your Task"}</h4>
                        <p style={{fontSize:"14px",color:"#333",margin:'15px'}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                    </div>
                    
                    <br /><br />

                     <div style={{width:'100%',display:'block',background:'#fff',padding:"10px"}}>
                        <Tasks />
                         
                    </div>
                    <div >
                    </div>               
                </div>
      
            </div>
            {/* <Modalok /> */}
        </div>
        {/* MODAL INITIALISATION */}
        <Popup />
                    
    </div>
    )
}

export default CampusTaskPanel
