import React from 'react'

function Dashboard() {
    return (
        <div style={{display:localStorage.getItem('token')!==null?'block':'none'}}>
            Hello user
        </div>
    )
}

export default Dashboard
