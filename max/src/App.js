import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Persons from './components/Persons/Persons';
import styled from 'styled-components';
import Cockpit from './components/Cockpit/Cockpit';
// import Radium, { StyleRoot } from 'radium';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import WithClass from "./hoc/WithClass";


/*

class based component lar da constructor ve super çağırılır sonrasinda state atanır

static tanımlanan metotlar çalışır örnek

static getDerived StateFromProps(props, state){
    console.log(props);
    return state;
}

Component yerine PureComponent import edilmeli classbased componentlerde

https://tr.reactjs.org/docs/react-component.html

*/

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
                <Persons
                    persons={state.persons}
                    del={deletePersonHandler}
                    change={changeNameHandle}/>
                {/*{state.persons.map((item, index) => {*/}
                {/*    return <Person*/}
                {/*        func={() => deletePersonHandler(index)}*/}
                {/*        name={item.name}*/}
                {/*        age={item.age}*/}
                {/*        key={index}*/}
                {/*        changeName={(event) => changeNameHandle(event, item.id)}/>*/}
                {/*})}*/}
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
    return (
        //React.createElement('div', {className: 'App'}, React.createElement('h1', {className: 'App-header'}, 'Mustafa selam canım'))
        //<StyleRoot>
        <WithClass classes="App">
            <header className="App-header">
                <Cockpit
                    personsLength={state.persons.length}
                    toggle={togglePersonsHandler}
                />
                {persons}
            </header>
        </WithClass>
        //</StyleRoot>
    );
}

export default App;
// export default Radium(App);
