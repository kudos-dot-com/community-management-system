import React from 'react'
import Mainbar from './Mainbar'
import Sidebar from '../../components/Sidebar/Sidebar'
export default function Dashboard() {
    return (
        <div style={{width:'100%',height:'100%',display:'flex',background:"#dfe4ea"}}>
            
            <div style={{width:'20%',height:'100%',display:"block",position:'sticky'}}>
                <Sidebar />
            </div>
            
            {/* display all the content */}
            <div style={{width:'100%',height:'100%'}}>
                <Mainbar />
            </div>
        </div>
    )
}
