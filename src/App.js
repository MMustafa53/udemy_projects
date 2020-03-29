import React, {useState} from 'react';
import './App.css';

import User from './components/User';

function App() {
    const [state, setState] = useState([
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
    );
    let deleteUser = (id) => {
        console.log("app e geldi");
        console.log(state);
        console.log(id);
        setState(state.filter(user => id !== user.id));
    };

    return (
        <div>
            <User
                my_Arr={state}
                deleteUser={deleteUser}
            />
        </div>
    );
}

export default App;
