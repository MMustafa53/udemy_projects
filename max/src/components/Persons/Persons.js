import React from 'react';
import Person from "./Person/Person";

const persons = (props) => (
    props.persons.map((item, index) => {
        return <Person
            func={() => props.del(index)}
            name={item.name}
            age={item.age}
            key={index}
            changeName={(event) => props.change(event, item.id)}/>
    })
);

export default persons;