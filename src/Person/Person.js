import React from "react";
import './Person.css';
const person = (props) =>{

 
   return (
       <div className="Person">
         <p onClick={props.click}> name :- {props.name} and age :- {props.age} </p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed} />
   </div>
   )
};
export default person;