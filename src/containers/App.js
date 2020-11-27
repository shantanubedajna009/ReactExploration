import React, {Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
import withClassWithSomeLogic from '../hoc/withClassWithSomeLogic';
import AuthContext from '../context/auth-context';

import classes from './App.css';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] Constructor');
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps ', props);
    return state;
  }
  

  // executes after the render and all nested component
  // lifecycle methods inside the render method
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(prevProps, PrevState){
    console.log('[App.js] shouldCOmponentUpdate');
    
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[App.js] getSnapshotBeforeUpdate');

    return {message: 'snapshot data from App.js'};

  }

  componentDidUpdate(prevProps, PrevState, snapshot){
    console.log('[APp.js] componentDidUpdate and snapsht is : ', snapshot);
  }




  state = {
      persons: [
        {id: 'asfsfgsf', name: "Max", age: 28},
        {id: 'xgbdbddb', name: "Manu", age: 29},
        {id: 'Zfdsafds', name: "NaniKore", age: 50000}
      ],

      showPersons: false,
      showCockpit: true,
      checkCounter: 0,
      isLoggedin: false
    }
  
  switchHandler = (newName) => {
    
    this.setState(
      {
        persons: [
          {id: 'dlirughdkg', name: newName, age: 35},
          {id: 'uchai', name: "Manu", age: 45},
          {id: 'qsxgh', name: "NaniKore", age: 4999}
        ]
      }
    )

    //console.log(this.state)
  }

  nameChangeHandler = (event, id) => {

    // finds the index
    const personIndex = this.state.persons.findIndex( (p) =>{

      return p.id === id;

    })

    const person = this.state.persons[personIndex];

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState(
     (prevState, props) => {
       return {
        persons: persons,
        
        //checkCounter: this.state.checkCounter + 1,
        checkCounter: prevState.checkCounter + 1,
        
       }

     } 
    );

  }

  toggeChangeHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState(
      {
        showPersons: !doesShow
      }
    )
  }

  deletenameHandler = (index) => {

    //const persons = this.state.persons.slice()
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});

  }

  toggleCockpit(){
    this.setState(
      {showCockpit: !this.state.showCockpit}
    )
  }


  loginHandler = () => {
    
    this.setState((prevState, prevprops) => {
        return ({
          isLoggedin: !prevState.isLoggedin
        })

    })
  }


  render () {

    console.log('[App.js] render method');



    let persons = []

    if (this.state.showPersons === true){

      persons = (
        

        // ekta component ar kichui na just ki return korbe
        // kokhono ota jsx jeta html other times ota just some
        // data structure jeta ei khetre ekta list/array 
          <Persons 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            deletenameHandler={ this.deletenameHandler }
            nameChangeHandler={ this.nameChangeHandler }
            //isLoggedin={this.state.isLoggedin}
          />
        
      );


    }

    return (
      <Aux>
        <h1>This is a react App</h1>
        <br/>
        <button onClick={ () => { this.toggleCockpit() } }>
          Toggle Cockpit
        </button>
        <br/>
        <br/>
        <AuthContext.Provider value={
          {
          isLoggedin: this.state.isLoggedin,
          loginHandler: this.loginHandler
          }
        
        }>
          { this.state.showCockpit ?
          <Cockpit 
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            toggeChangeHandler={this.toggeChangeHandler}
            switchHandler={this.switchHandler}
            //isLoggedin={this.state.isLoggedin}
            //loginHandler={this.loginHandler}
          />: null}

          {persons}

        </AuthContext.Provider>

      </Aux>
      
    )

  }
  
}
                // wrapperfunction to implement some logic
                // here applying className to a div
                // but can do some exceptiion handling
                // this is exactly like python decorators
export default withClassWithSomeLogic(App, classes.App);