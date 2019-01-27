import React from 'react';
import './Person.css'

// This is a function recieving props (dynamically).
// NOT a class extending component. So no manupulation of state.
// Very clean of what this is suppose to do. 

const person = (props) => {
    return (
        <div className="Person">
             <p onClick={props.click}>I am a person named {props.name} and I am {props.age} years old!</p>
             <p>{props.children}</p>
             <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;
