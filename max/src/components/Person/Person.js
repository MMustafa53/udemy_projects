import React from "react";
import '../../App.css'
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.func}> Ben hızım !! {getYear()}</p>
            <p> {props.name} {props.age} {props.children}</p>
            <input type="text" onChange={props.changeName}/>
        </div>
    )
};

const getYear = () => Math.random();
export default person;