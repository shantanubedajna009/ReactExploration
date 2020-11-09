import React from 'react';
import classes from './Cockpit.css'


const cockpit = (props) => {

    let adjustedClasses = [];
    if (props.persons.length <= 2){
      adjustedClasses.push(classes.red);
    }
    if (props.persons.length <= 1){
      adjustedClasses.push(classes.bold);
    }


    let btnClass = [] // [classes.Button];
    //console.log('Btn class: ', btnClass)


    if (props.showPersons){
        btnClass.push(classes.Red);
    }

    return (
        <div className={classes.Cockpit}>
            <h3 className={adjustedClasses.join(' ')}>Tuki !!!!</h3>
            <br/>
            
            <button onClick={props.toggeChangeHandler}
            className={btnClass.join(' ')}>
            
            {props.showPersons ? "Hide Persons" : "Show Persons"}
            </button>

            <br/>
            <br/>
            <br/>
            <br/>
            
            <button onClick={() => { props.switchHandler("HOHO !!"); } }>
            Change Person
            </button>
        </div>

    );
}



export default cockpit;