import React,{useEffect,useState,useRef} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function AdminSubmission() {
    const [user,setuser]=useState({});
    const [task,settask]=useState([]);
    const [status,setstatus]=useState("")
    const [show, setShow] = useState(false);
    useEffect(()=>{
        setuser(JSON.parse(localStorage.getItem('user')));
        fetch('http://localhost:4000/tasks/get-ca-task')
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
    // --------------------------
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
                        <th style={tableStyle}>Name</th>
                        <th style={tableStyle}>Email</th>
                        <th style={tableStyle}>time of submission</th>
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
                                <td style={tableStyle}>{data.user?data.user.name:"no name"}</td>
                                <td style={tableStyle}>{data.user?data.user.email:"no email"}</td>
                                <td style={tableStyle}>{data.updatedAt}</td>
                                <td style={tableStyle}><button  onClick={()=>submit(data)}  className="btn modal-trigger waves-effect waves-light btn">{data.status==="not approved"?"Approve":"Approved"}
                                </button>
                                </td>
                            </tr>
                            )
                    })
                }
                </table>
            </div>
        )
    }
    //filter form
    function Filter()
    {
        return (
            <div>
               <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Form>
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
                        {/* <Filter />                      */}
                    </div>

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

export default AdminSubmission
