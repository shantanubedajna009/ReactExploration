import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';


const cockpit = (props) => {

    const toggleRef = useRef(null); 

    // this authContext can be whatever you want
    const authContext = useContext(AuthContext);

    useEffect( () => {
      console.log('[Cockpit.js] useEffect');

      toggleRef.current.click();


      const timer = setTimeout( () => {

        //alert('ORAAAAAAAAAAAAAAA');
        console.log('Boom Shaka laka');


      }, 5000);


      // this runs after the useeffect gets executed
      // obiously
      return () => {
        clearTimeout(timer);
        console.log('[Cockpit.js] useEffect Return/Cleanup');
      }

    }, []) // runs on every update cause no second argument passes
    // will run on every startup if an empty list passed
    // will run on speciic object changes if passes in that list like
    // [props.persons, props.showPersons]  like this




    let adjustedClasses = [];
    if (props.personsLength <= 2){
      adjustedClasses.push(classes.red);
    }
    if (props.personsLength <= 1){
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
            
            <button ref={toggleRef} onClick={props.toggeChangeHandler}
            className={btnClass.join(' ')}>
            
            
            {props.showPersons ? "Hide Persons" : "Show Persons"}
            </button>

            {/* <AuthContext.Consumer>
              {
                (context) => {
                  return(
                    <button  onClick={() => context.loginHandler()}> {context.isLoggedin ? "Logout": "Login"}</button>
                  )
                }
              }
            </AuthContext.Consumer> */}
           

           <button  onClick={() => authContext.loginHandler()}> {authContext.isLoggedin ? "Logout": "Login"}</button>

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



export default React.memo(cockpit);