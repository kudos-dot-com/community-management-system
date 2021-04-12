import React from 'react'
import Mainbar from './Mainbar'
import Sidebar from './Sidebar'
export default function Dashboard() {
    return (
        <div style={{width:'100%',height:'100%',display:'flex'}}>
            
            <div style={{width:'30%',height:'100%'}}>
            <Sidebar />
            </div>

            <div style={{width:'100%',height:'100%'}}>
            <Mainbar />
            </div>
        </div>
    )
}
