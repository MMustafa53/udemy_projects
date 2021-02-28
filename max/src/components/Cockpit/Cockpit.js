import React from 'react';
import styled from "styled-components";

const MyButton = styled.button`
      background-color: purple;
      cursor: pointer;

      &:hover {
        background-color: salmon
      }
    ;
    `;

const cockpit = (props) => {

    let css_class = [];
    if (props.persons.length <= 2) {
        css_class.push('red');

    } else {
        css_class.push('bold');
    }
    return(
        <div>
            <p className={css_class}> hey my style worst :D</p>
            {/*<img src={logo} className="App-logo" alt="logo"/>*/}
            {/*<p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*</p>*/}
            {/*<a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*>*/}
            {/*    Learn React*/}
            {/*</a>*/}
            {/*<textarea id="name" value={val} onChange={handleSubmit}/>*/}
            {/*<button onClick={switchNameHandler.bind(this, 'Hüsrev')}>Değiştir</button>*/}
            <MyButton onClick={props.toggle}>Değiştir</MyButton>
            {/*<button style={style} onClick={togglePersonsHandler}>Değiştir</button>*/}
        </div>

    );
};

export default cockpit;