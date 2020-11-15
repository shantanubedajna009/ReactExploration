import React, { Component, Fragment } from 'react';
//import Radium from 'radium';
//import styled from 'styled-components';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';

class Person extends Component {

    render() {
        console.log('[Person.js] redering the Person');


        return (
                <Fragment>
                    <div className={classes.Person}>

                        <p key='k1' onClick={this.props.click}>Im {this.props.name} my age is: {this.props.age}</p>
                        <input key='k2' onChange={this.props.nameChange} value={this.props.name}></input>

                    </div>
                    <h1>Yare Yare Daze</h1>
                </Fragment>

        )


    }
}

export default Person;









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