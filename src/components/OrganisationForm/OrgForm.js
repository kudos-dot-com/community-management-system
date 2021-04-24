import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import './form.css'
import CountryData from '../../CountryStateList'

export default function OrgForm() {
   const [toggle,settoggle]=useState(false);
   const [name,setname]=useState('');
   const [role,setrole]=useState(["Non-Profit","Profit","Private","Public","College Group","unregistered","Others"]);
   const [email,setemail]=useState('');
   const [website,setwebsite]=useState('');
   const [number,setnumber]=useState('');
   const [city,setcity]=useState('');
   const [type,setType]=useState('');
   const [state,setstate]=useState('');
   const [country,setcountry]=useState('');
   const [description,setdescription]=useState('');
   const [scope,setscope]=useState('');
   const [password,setpassword]=useState('');
   const [submit,setsubmit]=useState('submit')
   const [countries,setallcountries]=useState([{}])
   const [selectCountry,setSelectedCountry]=useState("");
   const [allstates,setallstates]=useState([])
   useEffect(()=>{
    setallcountries(CountryData.countries); 
    console.log();
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
 }
},[selectCountry])

// name country state email website pawword description(area) scope of work(area) {type of org}(non profit,pvt,public,profit,college club,unregistered) social media link,contact no
   function onsubmit(e)
{
  setsubmit('loading...')
    e.preventDefault();
    // console.log(dob + residence + number);
  fetch("http://localhost:4000/api/users/admin-register-org",{
      method:"post",
      headers:{
          "Content-Type":"application/json",
          Authorization:"Bearer "+localStorage.getItem("token")
      },
      body:JSON.stringify({
          password,
          email,
          name,
          website,
          number,
          state,
          country:selectCountry,
          type,
          description,
          scope,
          city,
      })
  })
  .then(res=>res.json())
  .then(data=>{
   console.log(data);
   setsubmit('submit'); 
   alert(data.success+"an organisation");
  })
  .catch(err=>{
      console.log(err);
  })
}
console.log(type)
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
            <Form.Label>Organisation Name</Form.Label>
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
         <div className="d-flex justify-content-start" id="blockstyle">
          {/*  Date of Birth*/}
          <Form.Group  id="blockstyle" controlId="formBasicEmail">
            <Form.Label>Website URL</Form.Label>
            <Form.Control type="text" placeholder="Your Website URL" onChange={(e)=>setwebsite(e.target.value)}/>
        </Form.Group>   
        
       {/* wp number */}
       <Form.Group  id="blockstyle" controlId="formBasicEmail">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" placeholder="Your Contact Number" onChange={(e)=>setnumber(e.target.value)}/>
        </Form.Group>
        </div>

        <div className="d-flex" id="blockstyle">
         {/* city */}
        <Form.Group  id="blockstyle" controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control type="email"placeholder="Your City" onChange={(e)=>setcity(e.target.value)}/>
        </Form.Group>

       {/* pincode */}
        <div id="blockstyle">
          <label for="cars">Type Of Organisation:</label>
             <br /> 
             <select  id="filterBody" onChange={(e)=>setType(e.target.value)}>
               {role.map(data=>{
                  return(
                    <option eventKey="1"  value={data}  >{data}</option>
                    );
                    })} 
                  </select></div>
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
                      <Form.Label>Description</Form.Label>
                         <Form.Control as="textarea" rows={3} placeholder="Brief Dscription About Your Organisation" onChange={(e)=>setdescription(e.target.value)} />
                      </Form.Group>
                      <br></br>
                     
                     <Form.Group  id="blockstyle" controlId="formBasicEmail">
                      <Form.Label>Scope Of Work</Form.Label>
                         <Form.Control as="textarea" rows={3} placeholder="What Do Your Organisation Do And Aims At" onChange={(e)=>setscope(e.target.value)} />
                      </Form.Group>
         

         <input type="submit" value={submit} onClick={onsubmit} style={{height:'35px',width:'40%',background:'#FFFF00',font:'35px',fontWeight:'bolder',outline:'none',borderRadius:'30px',border:'1px solid transparent',display:'block',margin:'auto'}}/>
          <br /><br /> 
         </div>
    )
}
