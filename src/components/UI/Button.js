import React from 'react';
import classes from './Button.module.css';

const Button = props => {

    const test = () =>{
        alert('test');
    }

    return <button 
        className={classes.button} 
        type={props.type || 'button'}
        onClick={props.onClick}
        >{props.children}</button>
};

export default Button;