import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
// import './form.css'

import { useHistory } from 'react-router';

export default function AddTask() {
   const history=useHistory();   
   const [title,settitle]=useState("");
   const [points,setpoints]=useState("");
   const [des,setdes]=useState("");
   const [user,setuser]=useState("");
   const [submit,setsubmit]=useState("submit");
   useEffect(()=>{
    setuser(JSON.parse(localStorage.getItem('user')).role);
    console.log(user);
  },[user])
   function onsubmit(){
   setsubmit("Loading...")
    fetch(`http://localhost:4000/tasks/${user}-add-task`,{
        method:"post",
        headers:{
            "Content-Type":"application/json",
            Authorization:"Bearer "+localStorage.getItem("token")

        },
        body:JSON.stringify({
            title:title,
            description:des,
            points:points,
        })
    })
    .then(res=>res.json())
    .then(data=>{
     console.log(data);
     setsubmit("submit");
     alert(data.success);
     history.push(`/${user}/addtask`)
   
    })
    .catch(err=>{
        console.log(err);
    })
}    
   return (
       <div style={{background:'#fff',height:'100%'}}>
       
    
         
            
          <div style={{}}>            
             <h5 style={{textDecoration:'underline',fontSize:'17px',textAlign:'center',fontWeight:'normal',color:'#333'}}>Fill Task Details</h5> <br />
          </div>
      
        <div>
          <Form.Group  id="blockstyle" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" onChange={(e)=>settitle(e.target.value)} placeholder="Enter Title" />
          </Form.Group>
        </div>
        <div>
          <Form.Group  id="blockstyle" controlId="formBasicEmail">
            <Form.Label>Points</Form.Label>
            <Form.Control type="email" onChange={(e)=>setpoints(e.target.value)} placeholder="Enter Points" />
          </Form.Group>
        </div>
        
        <div>
                   <Form.Group  id="blockstyle" controlId="formBasicEmail">
                      <Form.Label>Description</Form.Label>
                         <Form.Control as="textarea" rows={10} onChange={(e)=>setdes(e.target.value)} placeholder="Your Description"  />
                      </Form.Group>
        </div>

         <input type="submit" onClick={onsubmit} value={submit} style={{height:'35px',width:'40%',background:'#FFFF00',font:'35px',fontWeight:'bolder',outline:'none',borderRadius:'30px',border:'1px solid transparent',display:'block',margin:'auto'}}/>
          <br /><br /> 
         </div>
    )
}
