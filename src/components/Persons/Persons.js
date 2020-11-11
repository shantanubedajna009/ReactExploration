import React, { Component } from 'react'
import Person from './Person/Person';


class Persons extends Component {


    // this component does not contain a state
    // this is a visual or dumb component
    // so this component should not contain a 
    // getDerivedStateFromProps 
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps ', props);
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');

        // boolean value based on which component will make the dom update
        // from the virtual dom to real dom
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');

        // should return a null if not returning a state
        //return null;

        return {messahe: 'just some message state'};
    }   

    componentDidUpdate(prevProps, prevState, snpshot){
        console.log('[Persons.js] componentDidUpdate state from snapshot: ', snpshot);

    }


    render() {
        console.log('[Persons.js] rendering.....');


        return (

            // the map creates a list and for reach item in the list have to retirn it
            // to build the list
            this.props.persons.map((person, index) => {
                return (<Person
                    click={() => this.props.deletenameHandler(index)}
                    nameChange={(event) => this.props.nameChangeHandler(event, person.id)} 
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    />);
            }) // map end

        ); // return end

    }

    
}

export default Persons;






// const persons = (props) => {

//     return (

//         // the map creates a list and for reach item in the list have to retirn it
//         // to build the list
//         props.persons.map((person, index) => {
//             return (<Person
//                 click={() => props.deletenameHandler(index)}
//                 nameChange={(event) => props.nameChangeHandler(event, person.id)} 
//                 name={person.name}
//                 age={person.age}
//                 key={person.id}
//                 />);
//         }) // map end

//     ); // return end

    
// }

// export default persons;