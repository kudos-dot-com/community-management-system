import React,{useEffect,useState,useRef} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import {useLocation,useHistory,Link} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AddTask from '../AddTask/AddTask'
function AddTaskPage(url) {
    const history=useHistory();    
    const [loading,setloading]=useState("");
    const [user,setuser]=useState({});
    const location=useLocation();
    const [task,settask]=useState([]);
    const [des,setdes]=useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow=(data) => {setdes(data); setShow(true)};

    console.log(des);
    useEffect(()=>{
        setloading("Loading...")
        setuser(JSON.parse(localStorage.getItem('user')));
        fetch(url.url)
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setloading("");
            settask(data.success);

        })
        .catch(err=>{
            console.log(err);
        })        
    },[])
        const tableStyle={
            textAlign:"center",
            padding:'10px 0px',
            borderBottom:'1px solid #ccc'
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
    function Tasks()
    {
        return (
            <div>
                <table style={{width:'100%'}}>
                    <tr>
                        <th style={tableStyle}>Title</th>
                        <th style={tableStyle}>Description</th>
                        <th style={tableStyle}>Points</th>
                        <th style={tableStyle}>TimeStamp</th>
                        <th style={tableStyle}>Action</th>
                     </tr>
                     <tr>
                         {loading}
                     </tr>
                {
                    task.map(data=>{
                        return (
                            <tr>
                                <td style={tableStyle}>{data.title}</td>
                                <td style={tableStyle}>
                                <button className="btn btn-info"  onClick={(e)=>handleShow(data.description)}>View</button>
                                 
                                </td>
                                <td style={tableStyle}>{data.points}</td>
                                <td style={tableStyle}>{data.updatedAt}</td>
                                <td style={tableStyle}><button  className="btn btn-info">Edit</button>
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
                       <Link to="/Addtask">
                            <button  className="btn btn-info" style={{width:'40%'}}>Add New Task</button>
                        </Link>

                    </div>

                    <br /><br />

                     <div style={{width:'100%',display:'block',background:'#fff',padding:"10px"}}>
                        <pre>Your Posted Tasks</pre>
                      {/* {task.length!==0?<Tasks />:""}    */}
                    </div>

                </div>
      
            </div>
        <Popup />
        </div>       
        {/* <Modal />             */}
    </div>
    )
}

export default AddTaskPage
