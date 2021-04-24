import React, {useState} from 'react';
import './Login.scss';

//Api;
import Api from '../../Api/Api.js';

//Images;
import Hero from '../../Images/login.jpg';
import Email from '../../Images/email.svg';
import Password from '../../Images/password.png';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

export default function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [buttonText, setButtonText] = useState('Submit');
    const [data, SetData] = useState({
        email:"",
        password:""
    })
    const handleChange = e =>{
        const name = e.target.name;
        const value = e.target.value;
        SetData(prev => ({
            ...prev, [name]: value
        }));
    }
    const handleSubmit = e =>{
        setButtonText('Loading...');
        console.log(data);
        Api.post('/users/user-login', data)
        .then(res => {
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('user',JSON.stringify(res.data.user))

            dispatch({
                type:"SET_CURRENT_USER",
                payload: res.data.user
            }
            );
            dispatch({
                type:"SET_LOGGED",
            })

            console.log(res.data);
            history.push('/dashboard');
        })
        .catch(err => console.log(err));
    }
    return (
        <div className = 'login' >
            <div className="hero">
                <img src={Hero} alt="Image" />
            </div>
            <div className="info">
                <div className="info_top">
                    <h1>Sign In</h1>
                    <span>Enter Email and Password.</span>
                </div>
                <div className="info_inputs">
                    <img src={Email} alt="Email Address"/>
                    <input onChange = {handleChange} name = 'email' value = {data.email} type="text" name="email" placeholder = "Enter Email Address" />
                </div>
                <div className="info_inputs">
                    <img src={Password} alt= 'Enter Password' />
                    <input onChange = {handleChange} name = 'password' value = {data.password} type="password" name="password" placeholder = "Enter Password" />
                </div>
                <div className="info_btn">
                    <Button onClick = {handleSubmit} type="submit" > {buttonText} </Button>
                </div>
            </div>
        </div>
    )
}
