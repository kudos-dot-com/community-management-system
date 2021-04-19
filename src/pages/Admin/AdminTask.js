import React,{useEffect,useState,useRef} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import {useLocation,useHistory,Link} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function AdminTask() {
    const history=useHistory();    
    const FormModal=useRef(null);
    const [user,setuser]=useState({});
    const location=useLocation();
    const [task,settask]=useState([]);
    const title=useRef("");
    const description=useRef("");
    const points=useRef("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        setuser(JSON.parse(localStorage.getItem('user')));
        fetch('http://localhost:4000/tasks/get-admin-task')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            settask(data.success);
        })
        .catch(err=>{
            console.log(err);
        })        
    },[])
     
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
            background:'#ddd'
        }
        const tableStyle={
            textAlign:"center"
        }
    function submit(){
        handleClose()
        console.log(title.current.value + description.current.value + points.current.value);
        fetch("http://localhost:4000/tasks/admin-add-task",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+localStorage.getItem("token")

            },
            body:JSON.stringify({
                title:title.current.value,
                description:description.current.value,
                points:points.current.value,
            })
        })
        .then(res=>res.json())
        .then(data=>{
         console.log(data);
         
        settask([data.task,...task]);
       
        })
        .catch(err=>{
            console.log(err);
        })
    }    
    function Form()
    {
        return (
            <div>
               <form>
                <div >
                    <label for="fname" style={labelstyle}>title for your task:</label> <br />
                    <input type="text" placeholder="Title of your task" style={fieldstyle} ref={title}/><br /> <br />
                </div>

                <div >
                    <label for="fname" style={labelstyle}>description of your task</label> <br />
                    <input type="text" ref={description} placeholder="Description of your task" style={fieldstyle} /><br /> <br />
                </div>

                <div >
                    <label for="fname" style={labelstyle}>points:</label> <br />
                    <input type="text" ref={points} placeholder="points alloted" style={fieldstyle} /><br /> <br />
                </div>

               </form>
            </div>
        )
    }
    function Modalok()
    {
        return (
            <div >
            <Modal style={{position:'absolute',top:'0',zIndex:'2',background:'',width:'40%',height:'100%'}} show={show} onHide={handleClose}>
                  <Modal.Header style={{background:'transparent',fontSize:'20px'}}>
                    <Modal.Title>Fill This Form</Modal.Title>
                  </Modal.Header>
                <hr />
              <Modal.Body>
              <Form />
              </Modal.Body>
              <Modal.Footer>
                  <hr />
                <Button style={{margin:'20px 5px'}} variant="secondary" onClick={handleClose}>
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
                <table style={{width:'100%'}}>
                    <tr>
                        <th style={tableStyle}>Title</th>
                        <th style={tableStyle}>Description</th>
                        <th style={tableStyle}>Points</th>
                        <th style={tableStyle}>TimeStamp</th>
                        <th style={tableStyle}>Action</th>
                     </tr>
                {
                    task.map(data=>{
                        return (
                            <tr>
                                <td style={tableStyle}>{data.title}</td>
                                <td style={tableStyle}>{data.description}</td>
                                <td style={tableStyle}>{data.points}</td>
                                <td style={tableStyle}>{data.updatedAt}</td>
                                <td style={tableStyle}><button  className="btn modal-trigger waves-effect waves-light btn">Edit</button>
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
                        {/* <input type="submit" value="Add New Task"  style={{display:user.role==='admin'?"block":"none",height:'35px',width:'40%',background:'#FFFF00',font:'25px',fontWeight:'lighter',outline:'none',borderRadius:'30px',border:'1px solid transparent'}} /> */}
                        {/* <a className="waves-effect waves-light btn" style={{width:'40%'}}>Add New Task</a>  */}
                        <button  onClick={handleShow} className="btn modal-trigger waves-effect waves-light btn" style={{width:'40%'}}>Add New Task</button>

                    </div>

                    <br /><br />

                     <div style={{width:'100%',display:'block',background:'#fff',padding:"10px"}}>
                        <pre>Your Posted Tasks</pre>
                        <Tasks />   
                    </div>

                </div>
      
            </div>
        </div>
        {/* MODAL INITIALISATION */}
        <Modalok />
            {/* <Modalok /> */}
            
    </div>
    )
}

export default AdminTask
