import React from 'react'
import Person from './Person/Person';

const persons = (props) => {

    return (

        // the map creates a list and for reach item in the list have to retirn it
        // to build the list
        props.persons.map((person, index) => {
            return (<Person
                click={() => props.deletenameHandler(index)}
                nameChange={(event) => props.nameChangeHandler(event, person.id)} 
                name={person.name}
                age={person.age}
                key={person.id}
                />);
        }) // map end

    ); // return end

    
}

export default persons;