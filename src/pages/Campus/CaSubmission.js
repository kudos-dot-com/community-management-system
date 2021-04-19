import React,{useEffect,useState,useRef} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import {useLocation,useHistory,Link} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
function CaSubmission() {
    const FormModal=useRef(null);
    const [user,setuser]=useState({});
    const location=useLocation();
    const [task,settask]=useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        setuser(JSON.parse(localStorage.getItem('user')));
        fetch('http://localhost:4000/tasks/ca-find-task',{
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
    },[])
    
    const tableStyle={
        textAlign:"center"
    }

    function Tasks()
    {
        return (
            <div>

                <table style={{width:'100%'}}>
                    <tr>
                        <th style={tableStyle}>Title</th>
                        <th style={tableStyle}>Description</th>
                        <th style={tableStyle}>Media Link</th>
                        <th style={tableStyle}>Points Alloted</th>
                        <th style={tableStyle}>Points gained</th>
                        <th style={tableStyle}>Submission Status</th>
                        <th style={tableStyle}>Submitted on</th>
                        <th style={tableStyle}>Action</th>
                     </tr>
                {
                    task.map(data=>{
                        return (
                            <tr>
                                <td style={tableStyle}>{data.title}</td>
                                <td style={tableStyle}>{data.description}</td>
                               
                                <td style={tableStyle}><Link to={{ pathname:`${data.media}` }} target="_blank" ><Button>Click Here</Button></Link></td>
                                <td style={tableStyle}>{data.points}</td>
                                <td style={tableStyle}>{data.PointsGained}</td>
                                <td style={tableStyle}>{data.status}</td>
                                <td style={tableStyle}>{data.updatedAt}</td>
                                <td style={tableStyle}><button  onClick={handleShow} className="btn modal-trigger waves-effect waves-light btn">Edit</button>
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
                <h4 style={{fontWeight:'lighter',margin:'auto',padding:'5px'}}>{user && user.role==='admin'?"All Submissions":"Your Submission"}</h4>
                   
                    <br />

                     <div style={{width:'100%',display:'block',background:'#fff',padding:"10px"}}>
                        <Tasks />   
                    </div>

                </div>
      
            </div>
        </div>
            
    </div>
    )

}

export default CaSubmission
