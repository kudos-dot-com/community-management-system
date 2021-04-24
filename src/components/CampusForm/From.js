import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import './form.css'
import CountryData from '../../CountryStateList'
import { useHistory } from 'react-router';

export default function Campus() {
   const [toggle,settoggle]=useState(false);
   const [name,setname]=useState('');
   const [email,setemail]=useState('');
   const [dob,setdob]=useState('');
   const [number,setnumber]=useState('');
   const [city,setcity]=useState('');
   const [pin,setpin]=useState('');
   const [state,setstate]=useState('');
   const [country,setcountry]=useState('');
   const [residence,setresidence]=useState('');
   const [password,setpassword]=useState('');
   const [submit,setsubmit]=useState('submit')
   const [countries,setallcountries]=useState([{}])
   const [selectCountry,setSelectedCountry]=useState("");
   const [allstates,setallstates]=useState([])
   const [user,setuser]=useState({});
   const [endpoint,setendpoint]=useState("");
   const history = useHistory();

   useEffect(()=>{
    setuser(JSON.parse(localStorage.getItem('user')));
     setallcountries(CountryData.countries); 
    user.role==="admin"?setendpoint("/admin-register-ca"):setendpoint("/org-register-ca");
   
  },[])

useEffect(()=>{
    var FOUND = countries.find(function(post, index) {
        if(post.country === selectCountry)
            return true;
    }
    );
 if(FOUND)
 {
     setallstates(FOUND.states);
    // console.log(FOUND.states)
 }
},[selectCountry])

   function onsubmit(e)
{
  setsubmit('loading...')
    e.preventDefault();
    // console.log(dob + residence + number);
  fetch(`http://localhost:4000/api/users/${endpoint}`,{
      method:"post",
      headers:{
          "Content-Type":"application/json",
          Authorization:"Bearer "+localStorage.getItem("token")
      },
      body:JSON.stringify({
          password,
          email,
          name,
          dob,
          number,
          state,
          country:selectCountry,
          pin,
          residence,
          city,
      })
  })
  .then(res=>res.json())
  .then(data=>{
   console.log(data);
   setsubmit('submit'); 
   alert(data.success+"a campus ambassador");
   history.push('/dashboard');
  })
  .catch(err=>{
      console.log(err);
  })
}

const labelstyle={
display:'block',   
textTransform:'capitalize',
fontSize:'17px',
marginLeft:'10px',
color:'#333'
}   
const fieldstyle={
    width:'90%',
    padding:'0px 20px',
    height:"30px",
    // borderBottom:'2px solid #0007',
    border:'1px solid transparent',
    outline:'none',
    display:'block',
    margin:'auto',
    // background:'#ddd'
}


   return (
       <div style={{background:'#fff',height:'100%'}}>
       
    
         
            
          <div style={{}}>            
             <h5 style={{textDecoration:'underline',fontSize:'17px',textAlign:'center',fontWeight:'normal',color:'#333'}}>Fill This Form</h5> <br />
          </div>
      
        <div style={{display:'flex'}} id="blockstyle">
          <Form.Group  id="blockstyle" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" onChange={(e)=>setname(e.target.value)} placeholder="Enter Name" />
          </Form.Group>

          <Form.Group  id="blockstyle" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setemail(e.target.value)}/>
          </Form.Group>
        </div>
         {/*  Password*/}
          <Form.Group  id="blockstyle" controlId="formBasicEmail">
            <Form.Label>password</Form.Label>
            <Form.Control type="text" placeholder="Enter password"  onChange={(e)=>setpassword(e.target.value)} />
          </Form.Group>
         <div className="d-flex" id="blockstyle">
          {/*  Date of Birth*/}
          <div id="blockstyle" className="md-form md-outline input-with-post-icon datepicker">
          {/* <br /> */}
          <label for="fname" style={labelstyle}>Date Of Birth</label> 
            <input type="date" id="blockstyle" id="birthday" name="birthday" onChange={(e)=>setdob(e.target.value)} />
          </div>
        
       {/* wp number */}
       <Form.Group  id="blockstyle" controlId="formBasicEmail">
            <Form.Label>Whatsapp Number</Form.Label>
            <Form.Control type="email" placeholder="Your Whatsapp Number" onChange={(e)=>setnumber(e.target.value)}/>
        </Form.Group>
        </div>

        <div className="d-flex" id="blockstyle">
         {/* city */}
        <Form.Group  id="blockstyle" controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control type="email"placeholder="Your City" onChange={(e)=>setcity(e.target.value)}/>
        </Form.Group>

       {/* pincode */}
       <Form.Group  id="blockstyle" controlId="formBasicEmail">
            <Form.Label>Pincode</Form.Label>
            <Form.Control type="email" placeholder="Pincode" onChange={(e)=>setpin(e.target.value)}/>
        </Form.Group>
        </div>
         
        <div className="d-flex" id="blockstyle">
         {/* country */}
         <div id="blockstyle">
          <label for="cars">Select Your Country:</label>
             <br /> <select  id="filterBody" onChange={(e)=>setSelectedCountry(e.target.value)}>
              {countries.map(data=>{
                 return(
                    <option eventKey="1"  value={data.country}  >{data.country}</option>
                       );
                     })}
                  </select></div>
                {/* states */}
                  <div id="blockstyle">
                     <label for="states">Select State:</label>
                         <br /> <select  id="filterBody" onChange={(e)=>setstate(e.target.value)} >
                            <option eventKey="1"  value="select a state"  >select a state</option>
                              {allstates.map(data=>{
                               return(
                                    <option eventKey="1"  value={data}  >{data}</option>
                                    );
                               })}
                              </select></div>

                   </div>

                   <Form.Group  id="blockstyle" controlId="formBasicEmail">
                      <Form.Label>Residence: Hostel/City</Form.Label>
                         <Form.Control as="textarea" rows={3} placeholder="Your Residence" onChange={(e)=>setresidence(e.target.value)} />
                      </Form.Group>
         

         <input type="submit" value={submit} onClick={onsubmit} style={{height:'35px',width:'40%',background:'#FFFF00',font:'35px',fontWeight:'bolder',outline:'none',borderRadius:'30px',border:'1px solid transparent',display:'block',margin:'auto'}}/>
          <br /><br /> 
         </div>
    )
}
