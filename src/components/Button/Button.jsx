import React from 'react';
import './Button.scss';

const Button = ({children,isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${inverted && "inverted"} ${isGoogleSignIn && "googleColor"} custom-button`} {...otherProps} >
        {children}
    </button>
)

export default Button;