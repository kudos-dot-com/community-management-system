import React from 'react';
import './SideBar.css';

//Router-dom
import { Link, useLocation } from 'react-router-dom';

//Components;

//Data;
import Data from './Data.js';

const SideBar = () =>{
    const location = useLocation();
    return (
        <div className="sb">
            <div className="sb_head">
                <p>Global Commune</p>
            </div>
            <div className="options">
                <h1>Menu</h1>
                {Data?.map(({img, title, link, _id}) => (
                    <Link to = {link} key = {_id} className = {`${location.pathname === link ? 'active' : '' }  nav_options`} >
                        <img src= {img}  alt="Nav Link"/>
                        <p>{title}</p>
                    </Link>
                  ))}
            </div>
        </div>
    )
};

export default SideBar;