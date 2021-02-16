import React from 'react';
import './Input.css';

const Input = (props) =>{
    return (
        <div className={props.classname +' divinput'}>
          <label>{props.label}</label>
          <input type={props.type} name={props.name} id={props.name} max={props.max} minLength={props.minlength} maxLength={props.maxlength} required />
        </div>
    );
    
}

export default Input;