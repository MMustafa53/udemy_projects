import React from "react";
import '../../../App.css'
// import Radium from 'radium';
import styled from 'styled-components';

const MyDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;

  @media(min-width: 500px) {
    .Person{
      width: 450px;
    }
  }`

const person = (props) => {
    // throw new Error('Hata döndürme testi');
    const style = {
        '@media (min-width: 500px)': {width: '450px'}
    }
    return (
        // <div className="Person" style={style}>
        <MyDiv style={style}>
            <p onClick={props.func}> Ben hızım !! {getYear()}</p>
            <p> {props.name} {props.age} {props.children}</p>
            <input type="text" onChange={props.changeName}/>
        </MyDiv>
    )
};

const getYear = () => Math.random();
export default person;
// export default Radium(person);