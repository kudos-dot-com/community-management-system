import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
export default function Login() {

const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const [status,setstatus]=useState("submit");
const history=useHistory();    
function onsubmit(e)
{
    e.preventDefault();
    setstatus("Loading...")
    // console.log(email + password);
  fetch("http://localhost:4000/api/users//admin-login",{
      method:"post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          password,
          email
      })
  })
  .then(res=>res.json())
  .then(data=>{
   if(!data.token)
   {
    alert(data.err);
    return;
  
   }
   localStorage.setItem('token',data.token);
   localStorage.setItem('user',JSON.stringify(data.user))
   console.log(data);
   history.push('/dashboard');
   setstatus("submit");
  })
  .catch(err=>{
      console.log(err);
  })
}


    return (
        <div style={{backgroundColor:'#5f9ea0',height:'100vh',width:'100%'}}>
        
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'30%'}}>
    <h4 style={{fontWeight:'lighter',textDecoration:'underline'}}>Login</h4>
    <form >
    
    <label for="fname" style={{color:"#000"}}>Email</label>
        <br />
        <input type="text" id="fname" name="fname" placeholder="John@gmail.com" onChange={(e)=>setemail(e.target.value)} style={{width:'80%',padding:'0px 20px',height:"30px",borderRadius:'30px',border:'1px solid transparent',outline:'none',background:"#fff"}} /><br /> <br />
        <label for="lname" style={{color:"#000"}}>Password</label> <br />
        <input type="text" id="lname" name="lname" placeholder="password" onChange={(e)=>setpassword(e.target.value)} style={{width:'80%',padding:'0px 20px',height:"30px",borderRadius:'30px',border:'1px solid transparent',outline:'none',background:"#fff"}}/><br /><br />
        <input type="submit" value={status} onClick={onsubmit} style={{height:'35px',width:'40%',background:'#FFFF00',font:'25px',fontWeight:'lighter',outline:'none',borderRadius:'30px',border:'1px solid transparent'}}/>
       
        </form>    
        </div>     
        </div>       
       
    )
}
