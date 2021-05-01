import React, {useState} from 'react';
import './Header.css';

//Images;
import Avatar from '../../Images/Header/avatar.png';
import DropDown from '../../Images/Header/dropdown.png';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const user = useSelector(state => state.user);
    const [show, SetShow] = useState(false);
    const dispatch = useDispatch();
    const styles = {
        dropDown:{
            display:`${show ? "inline" : 'none' }`
        }
    }
    const handleLogout = () =>{
        dispatch({
            type:"SET_LOGGED_OUT",
        });
    }
    return (
        <div className="header">
            <div className="login-avatar" onClick = {()=>SetShow(!show)} >
                <img src= {Avatar} alt="Avatar Pic"/>
                <p>{user?.name}</p>
                <img className = 'drop' src={DropDown} alt="DropDown"/>
            </div>
            <div className = 'dropdown' style = {styles.dropDown} >
                <p>Profile</p>
                <p>Settings</p>
                <p>Dark Theme</p>
                <p>Help Desk</p>
                <p>FAQ</p>
                <hr/>
                <p onClick = {handleLogout} >Logout</p>
            </div>
        </div>
    )
};

export default Header;