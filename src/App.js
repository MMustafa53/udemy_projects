import React, {useState} from 'react';
import './App.css';

import User from './components/User';
import Navbar from "./components/Navbar";

function App() {
    const [state, setState] = useState({
        users: [
            {
                id: 1,
                isim: "afatsum",
                title: "asdasd"
            },
            {
                id: 2,
                isim: "sufata",
                title: "titlees"
            }
        ]
    });
    
    return (
        <div>
            <User
                isim={state.users}
            />
            <Navbar title="titleım"/>
        </div>
    );
}

export default App;
