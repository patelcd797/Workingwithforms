import React from 'react';
import "./Select.css";

const Select = (props) =>{
    console.log(props.list);
    return (
        <div className="divselect">
            <label>{props.label}</label>
            <select id={props.name}>
            {props.list.map(person => (
                <option key={person}>{person}</option>
                ))}
            </select>
            <div>
               
            </div>
        </div>
    );
}
export default Select;
