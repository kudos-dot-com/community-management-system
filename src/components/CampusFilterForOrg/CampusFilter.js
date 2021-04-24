import React,{useEffect,useState,useRef} from 'react'
import Form from 'react-bootstrap/Form'
import csc from 'country-state-city'
import { ICountry, IState, ICity } from 'country-state-city'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
import CountryData from '../../CountryStateList'
import Button from 'react-bootstrap/Button'

function CampusUsers() {
    const [user,setuser]=useState([]);
    const [status,setstatus]=useState(["ACTIVE","DEACTIVATED"]);
    const [role,setrole]=useState(["campus-ambassador","voulenteer","country-ambassador","organisation","admin"]);
    const [campusrole,getrole]=useState("");
    const [city,setcity]=useState("");
    const [state,setstate]=useState("");
    const [country,setcountry]=useState("");
    const [countries,setallcountries]=useState([{}])
    const [selectCountry,setSelectedCountry]=useState("");
    const [allstates,setallstates]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/api/users/org-get-campus-user',{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
            }
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setuser(data.success);
        })
        .catch(err=>{

            console.log(err);
        })
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
        console.log(FOUND.states)
     }
    },[selectCountry])


    const tableStyle={
        textAlign:"center",
        padding:'10px 0px',
        borderBottom:'1px solid #ccc'
    }
    const filterBody={
        display:'inline-block',
        padding:'10px',
        margin:'5px 0px',
        
    }
    const filterField={
        backgroundColor:'#ddd',
        padding:'0px 15px',
        
    }
    
     
     function resetFilter()
     {
         setSelectedCountry("");setstate("");getrole("");
     } 
    function Tasks()
    {
        return (
            <div>

                <table style={{width:'100%'}}>
                    <tr>
                        <th style={tableStyle}>Status</th>
                        <th style={tableStyle}>Name</th>
                        <th style={tableStyle}>Email</th>
                        <th style={tableStyle}>User Type</th>
                        <th style={tableStyle}>city</th>
                        <th style={tableStyle}>state</th>
                        <th style={tableStyle}>country</th>
                        <th style={tableStyle}>residence</th>
                        <th style={tableStyle}>Action</th>
                     </tr>
                     {user.length===0?<p style={{marginTop:'15px',textAlign:'center',Fontweight:'thinner',fontSize:'19px',color:'#0006'}}>No Campus Ambassador Found</p>:""}
                {
                    user
                    .filter((val=>{
                        if(campusrole==="" && selectCountry==="" && state==="")
                        { return val }

                         else if(  val.role.substring(0,campusrole.length)===campusrole 
                                // && (val.city?val.city.substring(0,city.length)===city:"")
                                && (val.state?val.state.substring(0,state.length)===state:"")
                                && (val.country?val.country.substring(0,selectCountry.length)===selectCountry:""))
                              
                        { return val }}))
                    .map(data=>{
                        return (
                            <tr>
                                <td style={tableStyle}>Active</td>
                                <td style={tableStyle}>{data.name}</td>
                                <td style={tableStyle}>{data.email}</td>
                                <td style={tableStyle}>{data.role}</td>
                                <td style={tableStyle}>{data.city?data.city:"no details"}</td>
                                <td style={tableStyle}>{data.state?data.state:"no details"}</td>
                                <td style={tableStyle}>{data.country?data.country:"no details"}</td>
                                <td style={tableStyle}>{data.residence?data.residence:"no details"}</td>
                                <td style={tableStyle}><button className="btn btn-info">Edit</button>
                                </td>

                            </tr>
                                );
                    })
                }
                </table>
            </div>
        )
    }
    // console.log(selectCountry + state + campusrole)
    return (
            <div style={{width:'100%',height:'100%'}}>
                 <br />

                 <div style={{width:'100%',display:'block',background:'#fff',padding:"10px",height:'100%'}}>
                         <Form style={{display:"flex",justifyContent:'space-evenly',flexWrap:'wrap'}}>
                                    {/* active or inactive */}
                                     <div >
                                    <label for="cars">Status:</label>
                                   <br /> <select style={filterBody} >
                                    {status.map(data=>{
                                    return(
                                    <option eventKey="1"  value={data}  >{data}</option>
                                    );
                                    })}
                                    </select></div>
                                {/* country */}
                                <div>
                                <label for="cars">Select Your Country:</label>
                                   <br /> <select  style={filterBody} onChange={(e)=>setSelectedCountry(e.target.value)}>
                                    {countries.map(data=>{
                                    return(
                                    <option eventKey="1"  value={data.country}  >{data.country}</option>
                                    );
                                    })}
                                    </select></div>

                                    <div >
                                    <label for="states">Select State:</label>
                                   <br /> <select   onChange={(e)=>setstate(e.target.value)} style={filterBody} >
                                   <option eventKey="1"  value="select a state"  >select a state</option>
                                    {allstates.map(data=>{
                                    return(
                                    <option eventKey="1"  value={data}  >{data}</option>
                                    );
                                    })}
                                    </select></div>

                                    <div >
                                    <label for="role">Select Role:</label>
                                   <br /> <select   onChange={(e)=>getrole(e.target.value)} style={filterBody} >
                                   {role.map(data=>{
                                    return(
                                    <option eventKey="1"  value={data}  >{data}</option>
                                    );
                                    })}
                                    </select></div>
                                  
                                    
                        </Form>     
                        <br></br>
                         <div className="d-flex justify-content-center">
                            <button className="d-block mx-1 btn btn-secondary shadow-lg" onClick={resetFilter}>reset</button>
                            <button className="d-block mx-1 btn btn-dark">Apply</button>
                         </div>                                            
                    </div>
                <br />

                    <div style={{width:'100%',display:'block',background:'#fff',padding:"10px"}}>
                        <Tasks />   
                    </div>
                </div>
        

    )
}

export default CampusUsers