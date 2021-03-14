import React, {useEffect} from 'react';
import styled from "styled-components";

const MyButton = styled.button`
      background-color: purple;
      cursor: pointer;

      &:hover {
        background-color: salmon
      }
    ;
    `;

const Cockpit = props => {
    useEffect(() =>{
        console.log('use effect çağırıldı');
        const timer = setTimeout(() => {
            alert('Veri kaydedildi')
        },1000);
        return () =>{
            clearTimeout(timer); // clean ederken alert vermesin diye eklendi
            console.log('clean up');  // componene render edilmediğinde otomatik clean edilir Eğer iki useEffect
                                      //  varsa biri çalıştıktan sonra kendini clean eder ve diğerine geçer

        }
    }, [props.personsLength]) // boş dizi ([]) verilirse bir kere çağırılır, useEffect birden falza çağrılacaksa
                             // dizi içine verilen değişken değiştiği zaman tekrar çağırılır. props.persons
                             // değiştiğiştiğinde tekrar use effect çağrılır.
    let css_class = [];
    if (props.personsLength <= 2) {
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

export default React.memo(Cockpit);