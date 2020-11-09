import React, {Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import classes from './App.css';

class App extends Component {

  state = {
      persons: [
        {id: 'asfsfgsf', name: "Max", age: 28},
        {id: 'xgbdbddb', name: "Manu", age: 29},
        {id: 'Zfdsafds', name: "NaniKore", age: 50000}
      ],

      showPersons: false
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
      {
        persons: persons
      }
    )

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


  render () {

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
          />
        
      );


    }

    return (
      <div className={classes.App}>
        <h1>This is a react App</h1>
        <br/>

        <Cockpit 
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          toggeChangeHandler={this.toggeChangeHandler}
          switchHandler={this.switchHandler}
        />

        {persons}

      </div>
      
    )

  }
  
}

export default App;