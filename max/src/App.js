import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Person from './components/Person/Person';
import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';

function App() {
    const [state, setState] = useState({
        persons: [
            {age: "25", name: "Musto", "id": 1},
            {age: "26", name: "Musto6", "id": 2},
            {age: "27", name: "Musto7", "id": 3},
        ],
        showPersons: false
    })

    const [val, setVal] = useState('')

    const switchNameHandler = (names) => {
        console.log('tıklamaaaaaaaaa');
        // Böyle olmazz !! state.persons[0].name = 'Muhoooo'
        setState({
            persons: [
                {age: "35", name: names},
                {age: "36", name: val},
                {age: "37", name: "3Musto7"}
            ]
        })
    }

    const MyButton = styled.button`
      background-color: pink;
      cursor: pointer;
      &:hover {background-color: black};
    `;
    const handleSubmit = (evt) => {
        setVal(evt.target.value)
    }

    const changeNameHandle = (event, id) => {
        const personIndex = state.persons.findIndex(itm => {
            return itm.id === id
        })
        // const person = state.persons[personIndex]   using v1
        const person = {
            ...state.persons[personIndex]
        }
        person.name = event.target.value;
        const persons_state = {...state};
        persons_state.persons[personIndex] = person;
        // const person_obj = Object.assign({}, state.persons[personIndex])  using v2
        setState({
            ...persons_state
        })
    }
    const togglePersonsHandler = () => {
        const isShow = !state.showPersons;
        // v1
        // setState(prevState => ({
        //     ...prevState, showPersons: isShow
        // }));

        // v2
        setState(prevState => {
            prevState.showPersons = isShow
            return {...prevState}
        })
        // v3
        //setState({persons: state.persons, showPersons: !state.showPersons})
    }

    const deletePersonHandler = (personIndex) => {
        const persons = state.persons
        //const persons = [...state.persons]
        persons.splice(personIndex, 1)
        setState(pState => ({...pState, persons: persons}))
    }

    const style = {backgroundColor: 'pink', cursor: 'pointer', ':hover': {backgroundColor: 'black'}}
    let persons = null;
    if (state.showPersons) {
        persons = (
            <div>
                {state.persons.map((item, index) => {
                    return <Person
                        func={() => deletePersonHandler(index)}
                        name={item.name}
                        age={item.age}
                        key={index}
                        changeName={(event) => changeNameHandle(event, item.id)}/>
                })}
                {/*<Person age={state.persons[0].age} name={state.persons[0].name}*/}
                {/*        func={switchNameHandler.bind(this, 'Hüsrev')}/>*/}
                {/*<Person age={state.persons[1].age} name={state.persons[1].name} func={switchNameHandler}*/}
                {/*        changeName={changeNameHandle}/>*/}
                {/*<Person age={state.persons[2].age} name={state.persons[2].name} func={switchNameHandler}*/}
                {/*        changeName={handleSubmit}/>*/}
            </div>)
        style.backgroundColor = 'green';
        style[':hover'] = {backgroundColor: 'red'}
    }
    let classes = [];
    if (state.persons.length <= 2) {
        classes.push('red');

    } else {
        classes.push('bold');
    }
    return (
        //React.createElement('div', {className: 'App'}, React.createElement('h1', {className: 'App-header'}, 'Mustafa selam canım'))
        //<StyleRoot>
        <div className="App">
            <header className="App-header">
                <p className={classes}> hey my style worst :D</p>
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
                <MyButton onClick={togglePersonsHandler}>Değiştir</MyButton>
                {/*<button style={style} onClick={togglePersonsHandler}>Değiştir</button>*/}
                {persons}
            </header>
        </div>
        //</StyleRoot>
    );
}

export default App;
// export default Radium(App);
