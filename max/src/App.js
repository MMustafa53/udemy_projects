import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Person from './components/Person/Person'

function App() {
    const [state, setState] = useState({
        persons: [
            {age: "25", name: "Musto"},
            {age: "26", name: "Musto6"},
            {age: "27", name: "Musto7"},
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

    const changeNameHandle = (event) => {
        setState({
            persons: [
                {age: "35", name: 'Name1'},
                {age: "36", name: event.target.value},
                {age: "37", name: "3Musto7"}
            ]
        })
    }
    const togglePersonsHandler = () => {
        console.log(state)
        const isShow = !state.showPersons;
        // v1
        // setState(prevState => ({
        //     ...prevState, showPersons: isShow
        // }));

        // v2
        setState(prevState => {
            let prv = state
            prv.showPersons = isShow
            return {...prv}
        })
        // v3
        //setState({persons: state.persons, showPersons: !state.showPersons})
        console.log(state)
    }
    const style = {backgroundColor: 'black', cursor: 'pointer'}
    return (
        //React.createElement('div', {className: 'App'}, React.createElement('h1', {className: 'App-header'}, 'Mustafa selam canım'))
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <textarea id="name" value={val} onChange={handleSubmit}/>
                {/*<button onClick={switchNameHandler.bind(this, 'Hüsrev')}>Değiştir</button>*/}
                <button style={style} onClick={togglePersonsHandler}>Değiştir</button>
                {state.showPersons ? <div>
                    <Person age={state.persons[0].age} name={state.persons[0].name}
                            func={switchNameHandler.bind(this, 'Hüsrev')}/>
                    <Person age={state.persons[1].age} name={state.persons[1].name} func={switchNameHandler}
                            changeName={changeNameHandle}/>
                    <Person age={state.persons[2].age} name={state.persons[2].name} func={switchNameHandler}
                            changeName={handleSubmit}/>
                </div> : null
                }

            </header>
        </div>
    );
}

export default App;
