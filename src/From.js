import React,{useState} from 'react'

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
   
   function onsubmit(e)
{
    e.preventDefault();
    // console.log(dob + residence + number);
  fetch("http://localhost:4000/api/users/campus-register",{
      method:"post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          password,
          email,
          name,
          dob,
          number,
          state,
          country,
          pin,
          residence,
          city,
      })
  })
  .then(res=>res.json())
  .then(data=>{
   console.log(data);
    // alert(data.success+"a campus ambassador");
  })
  .catch(err=>{
      console.log(err);
  })
}

const labelstyle={
display:'block',   
textTransform:'capitalize',
fontSize:'17px'
}   

const blockstyle={
background:'#fff',
width:'50%',
margin:'auto',
borderRadius:'30px',
padding:'30px',
boxShadow: '9px 9px 14px -7px rgba(0,0,0,0.75)'
}

const fieldstyle={
    width:'90%',
    padding:'0px 20px',
    height:"30px",
    borderBottom:'2px solid #0006',
    border:'1px solid transparent',
    outline:'none',
    display:'block',

}

   return (
       <div style={{background:'rgb(248,248,255)',height:'100%'}}>
       
         {/* name */}
         <div style={blockstyle}>
            <div style={{}}>            
             <label for="fname" style={labelstyle}>Fill This Form</label> <br />
             </div>
       </div><br />

       {/* name */}
        <div style={blockstyle}>
            <div style={{}}>            
             <label for="fname" style={labelstyle}>name:</label> <br />
             <input type="text" id="fname" name="fname" placeholder="John doe" onChange={(e)=>setname(e.target.value)} style={fieldstyle} /><br /> <br />
             </div>
       </div><br />

         {/* email */}
         <div style={blockstyle}>
            <div style={{}}>            
             <label for="fname" style={labelstyle}>Email:</label> <br />
             <input type="text" id="fname" name="email" placeholder="Johndoe@gmail.com" onChange={(e)=>setemail(e.target.value)} style={fieldstyle} /><br /> <br />
             </div>
       </div><br />

         {/*  Password*/}
         <div style={blockstyle}>
            <div style={{}}>            
             <label for="fname" style={labelstyle}>Password</label> <br />
             <input type="text" id="fname" name="fname" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} style={fieldstyle} /><br /> <br />
             </div>
       </div><br />

         {/*  Date of Birth*/}
         <div style={blockstyle}>
            <div style={{}}>            
             <label for="fname" style={labelstyle}>Date Of Birth</label> <br />
             <input type="text" id="fname" name="fname" placeholder="Your DOB" onChange={(e)=>setdob(e.target.value)} style={fieldstyle} /><br /> <br />
             </div>
       </div><br />

         {/* wp number */}
         <div style={blockstyle}>
            <div style={{}}>            
             <label for="fname" style={labelstyle}>Whatsapp Number</label> <br />
             <input type="text" id="fname" name="fname" placeholder="Your Whatsapp Number" onChange={(e)=>setnumber(e.target.value)} style={fieldstyle} /><br /> <br />
             </div>
       </div><br />

         {/* City */}
         <div style={blockstyle}>
            <div style={{}}>            
             <label for="fname" style={labelstyle}>City:</label> <br />
             <input type="text" id="fname" name="fname" placeholder="Your City" onChange={(e)=>setcity(e.target.value)} style={fieldstyle} /><br /> <br />
             </div>
       </div><br />

  {/* Pincode */}
  <div style={blockstyle}>
            <div style={{}}>            
             <label for="fname" style={labelstyle}>Pincode</label> <br />
             <input type="text" id="fname" name="fname" placeholder="Pincode" onChange={(e)=>setpin(e.target.value)} style={fieldstyle} /><br /> <br />
             </div>
       </div><br />

         {/* State */}
         <div style={blockstyle}>
            <div style={{}}>            
             <label for="fname" style={labelstyle}>State</label> <br />
             <input type="text" id="fname" name="fname" placeholder="Your State" onChange={(e)=>setstate(e.target.value)} style={fieldstyle} /><br /> <br />
             </div>
       </div><br />

         {/* Country */}
         <div style={blockstyle}>
            <div style={{}}>            
             <label for="fname" style={labelstyle}>Country</label> <br />
             <input type="text" id="fname" name="fname" placeholder="Your Country" onChange={(e)=>setcountry(e.target.value)} style={fieldstyle} /><br /> <br />
             </div>
       </div><br />

          {/* residence*/}
          <div style={blockstyle}>
            <div style={{}}>            
             <label for="fname" style={labelstyle}>Residence: Hostel/City</label> <br />
             <input type="text" id="fname" name="fname" placeholder="Your Residence" onChange={(e)=>setresidence(e.target.value)} style={fieldstyle} /><br /> <br />
             </div>
       </div><br />

       <input type="submit" value="submit" onClick={onsubmit} style={{height:'35px',width:'40%',background:'#FFFF00',font:'35px',fontWeight:'bolder',outline:'none',borderRadius:'30px',border:'1px solid transparent',display:'block',margin:'auto'}}/>
        <br /><br /> 
       </div>
    )
}