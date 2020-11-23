import React, { Component, Fragment } from 'react';
//import Radium from 'radium';
//import styled from 'styled-components';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClassWithSomeLogic from '../../../hoc/withClassWithSomeLogic';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';

class Person extends Component {

    constructor(props){
        super(props);

        this.inputElement = React.createRef();
    }

    componentDidMount(){
        //this.inputElement.focus();

        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] redering the Person');


        return (
                <Aux>


                    <p key='k1' onClick={this.props.click}>Im {this.props.name} my age is: {this.props.age}</p>
                    <input 
                        key='k2'
                        
                        //ref={(inputEl) => {this.inputElement = inputEl}}
                        ref={this.inputElement}
                        
                        onChange={this.props.nameChange} 
                        value={this.props.name}>    
                    </input>


                </Aux>

        )


    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    nameChange: PropTypes.func
};

//eta ekhon person hisabe clalacce
// jokhon persons.js person er moddhe props pathabe 
// ota actually jabe hocce decorator function tar moddhe
// tai props take spread korte hocce withClassWithSOmeLogic er moddhe
export default withClassWithSomeLogic(Person, classes.Person);









// const StyledDiv = styled.div`
// width: 60%;
// margin: 16px auto;
// border: 1px solid #eee;
// box-shadow: 0 2px 3px #ccc;
// padding: 16px;
// text-align: center;

// @media (min-width: 500px): {
//     width: 450px;
// }
// `;

// const person = (props) => {

//     // const rnd = Math.random();
//     // if (rnd > 0.7){
//     //     throw Error('Something went wrong');
//     // }
    

//     return (

//         <div className={classes.Person}>
//             <p onClick={props.click}>Im {props.name} my age is: {props.age}</p>
//             <input onChange={props.nameChange} value={props.name}></input>
//         </div>

//     )
// }

// export default person;