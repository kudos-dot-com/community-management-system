import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Sidebar extends Component {
    render() {
        return (
            <div style={{height:'100vh',width:'60%',background:'rgb(248,248,255)',boxShadow: '6px 10px 17px -3px rgba(0,0,0,0.75)'}}>

              <ul>
                  <li style={{textAlign:"center",textTransform:'capitalize',padding:'15px 0px',fontSize:'17px',fontWeight:'lighter'}}>dashboard</li>
                  <li style={{textAlign:"center",textTransform:'capitalize',padding:'15px 0px',fontSize:'17px',fontWeight:'lighter'}}>college</li>
                  <li style={{textAlign:"center",textTransform:'capitalize',padding:'15px 0px',fontSize:'17px',fontWeight:'lighter'}}>courses</li>
                  <Link to="/campus"><li style={{textAlign:"center",textTransform:'capitalize',padding:'15px 0px',fontSize:'17px',fontWeight:'lighter'}}>college ambasador</li></Link>
                  <li style={{textAlign:"center",textTransform:'capitalize',padding:'15px 0px',fontSize:'17px',fontWeight:'lighter'}}>ca task</li>
                  <li style={{textAlign:"center",textTransform:'capitalize',padding:'15px 0px',fontSize:'17px',fontWeight:'lighter'}}>take action</li>
                  <li style={{textAlign:"center",textTransform:'capitalize',padding:'15px 0px',fontSize:'17px',fontWeight:'lighter'}}>submission</li>
                  <li style={{textAlign:"center",textTransform:'capitalize',padding:'15px 0px',fontSize:'17px',fontWeight:'lighter'}}>country ambasador</li>
              </ul>

            </div>
        )
    }
}

export default Sidebar
