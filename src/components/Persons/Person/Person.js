import React from 'react';
//import Radium from 'radium';
//import styled from 'styled-components';
import classes from './Person.css';

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

const person = (props) => {

    // const rnd = Math.random();
    // if (rnd > 0.7){
    //     throw Error('Something went wrong');
    // }
    

    return (

        <div className={classes.Person}>
            <p onClick={props.click}>Im {props.name} my age is: {props.age}</p>
            <input onChange={props.nameChange} value={props.name}></input>
        </div>

    )
}

export default person;