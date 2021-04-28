import React,{useEffect,useState,useRef} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import {useLocation,useHistory,Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Tasks from './SubmissionTable'
function AdminSubmission(url) {
    const [user,setuser]=useState({});
    const [task,settask]=useState([]);
    const [reftask,setRefTask]=useState([]);
    const [status,setstatus]=useState("")
    const [show, setShow] = useState(false);
    const [title,settitle]=useState("");
    const [des,setdes]=useState("");
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [points,setpoints]=useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        setuser(JSON.parse(localStorage.getItem('user')));
        fetch(url.url,{headers:{
                "Content-Type":"application/json",
                Authorization:"Bearer "+localStorage.getItem("token")

            }})
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            settask(data.success);
            // setRefTask(data.success);
        })
        .catch(err=>{
            console.log(err);
        })        
    },[])
    
    const tableStyle={
        textAlign:"center"
    }
    
    //form style 
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
    const filterBody={
        display:'inline-block',
        padding:'10px',
        margin:'0px 15px'
    }
    const filterField={
        background:'#ddd',
        padding:'0px 15px',
        
    }
    const rowstyle={
        // display:'inline-block',
       
        // padding:'5px 0px',
        // border:'1px solid red'

    }
    // --------------------------
    // function Tasks()
    // {
    //     return (
           
    //     )
    // }
    return (
    <div style={{width:'100%',height:'100%',display:'flex',background:"#dfe4ea"}}>
            
            <div style={{width:'20%',height:'100%'}}>
                <Sidebar />
            </div>

        <div style={{width:'100%',height:'100%'}}>
            <div  style={{width:'100%',display:'block'}}>
                <div style={{width:"96%",display:"block",marginLeft:"15px"}}>    
                <h4 style={{fontWeight:'lighter',margin:'auto',padding:'5px'}}>
                    {user && user.role==='admin'?"All Submissions":"Your Submission"}
                </h4>
                   
                    <br />

                    {/* <div style={{width:'100%',display:'block',background:'#fff',padding:"10px",height:'100%'}}>
                                                                    
                    </div> */}

                    <br />

                     <div style={{width:'100%',display:'block',background:'#fff',padding:"10px"}}>
                      { task? <Tasks task={task} />:""
                      }   
                    </div>

                </div>
      
            </div>
        </div>
            
    </div>
    )
}

export default AdminSubmission
