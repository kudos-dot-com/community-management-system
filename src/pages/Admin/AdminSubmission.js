import React,{useEffect,useState,useRef} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import {useLocation,useHistory,Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function AdminSubmission() {
    const FormModal=useRef(null);
    const [user,setuser]=useState({});
    const location=useLocation();
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
        fetch('http://localhost:4000/tasks/get-ca-task')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            settask(data.success);
            setRefTask(data.success);
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
                    task.filter((val=>{
                        if(des === "" && title==="" && points==="" && name==="" && email==="")
                        { return val }

                         else if(val.description.substring(0,des.length)===des
                                && val.title.substring(0,title.length)===title 
                                && val.points.substring(0,points.length)===points
                                && (val.user?val.user.name.substring(0,name.length)===name 
                                && val.user.email.substring(0,email.length)===email
                                :"")
                              )
                        { return val }}))
                        .map(data=>{
                    console.log(data.description.substring(0,des.length))
                        return (
                           
                           <tr style={rowstyle}>
                           
                                <td style={tableStyle}>{data.title}</td>
                                <td style={tableStyle}>{data.description}</td>
                                <td style={tableStyle}><Link to={{ pathname:`${data.media}` }} target="_blank" ><Button className="btn btn-info">Click Here</Button></Link></td>
                                <td style={tableStyle}>{data.points}</td>
                                <td style={tableStyle}>{data.user?data.user.name:"no name"}</td>
                                <td style={tableStyle}>{data.user?data.user.email:"no email"}</td>
                                <td style={tableStyle}>{data.updatedAt}</td>
                                <td style={tableStyle}><button  onClick={()=>submit(data)}  className="btn btn-info">{data.status==="not approved"?"Approve":"Approved"}
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

                    <div style={{width:'100%',display:'block',background:'#fff',padding:"10px",height:'100%'}}>
                         <Form style={{display:"flex",justifyContent:'flex-start',flexWrap:'wrap'}}>
                            <Form.Group style={filterBody} controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control style={filterField} onChange={(e)=>settitle(e.target.value)} type="text" placeholder="Enter Title" />
                             </Form.Group>

                            <Form.Group  style={filterBody} controlId="formBasicEmail">
                                <Form.Label>Description</Form.Label>
                                <Form.Control style={filterField} onChange={(e)=>setdes(e.target.value)} type="text" placeholder="Enter Description" />
                            </Form.Group>

                            <Form.Group style={filterBody} controlId="formBasicEmail">
                                <Form.Label>Points Alloted</Form.Label>
                                <Form.Control style={filterField} onChange={(e)=>setpoints(e.target.value)} type="text" placeholder="Enter Points" />
                            </Form.Group>
                           
                            <Form.Group style={filterBody} controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control style={filterField} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter Name" />
                            </Form.Group>

                            
                            <Form.Group style={filterBody} controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control style={filterField} onChange={(e)=>setemail(e.target.value)} type="text" placeholder="Enter email" />
                            </Form.Group>
                        </Form>                                           
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
