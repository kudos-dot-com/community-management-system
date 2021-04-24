import React from 'react'
import Mainbar from './Mainbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import csc from 'country-state-city'
import { ICountry, IState, ICity } from 'country-state-city'
export default function Dashboard() {
    // console.log(csc.getAllCountries('AS'));

    return (
        <div style={{width:'100%',height:'100%',display:'flex',background:"#dfe4ea"}}>
            
            <div style={{width:'20%',height:'100%',display:"block",position:'sticky'}}>
                <Sidebar />
            </div>
            
            {/* display all the content */}
            <div style={{width:'100%',height:'200vh'}}>
                <Mainbar />
            </div>
        </div>
    )
}
