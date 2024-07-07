// EASY: Create a ‘constructor’ that takes in ‘props’ , 
// call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ 
// class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object


import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import Header from './Header';
import Footer from './Footer';
import './App.css'; //import it as BasicInfo


  // MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor. 
  //  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’.AKA File name 
  //  (This challenge should not change the look of the page)

class App extends Component {
  // The constructor initializes the state
  constructor(props) {
     // Initializing the state with a 'person' object containing basic information
    super(props);
    this.state = {
      people: [
        { name: 'Beni Kiambote', number: '948-4443-443', dob: 'January 1, 2002' },
        { name: 'Justin Smith', number: '987-654-3210', dob: 'February 2, 1985' },
        { name: 'Latori Johnson', number: '456-789-1230', dob: 'March 3, 1995' }
      ]
    };
  }


// HARD: Now that you have a basic react app to display one person’s worth of information, 
// now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state.
// (Optional: add styling to space out each person’s info)

render() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <h1>Contacts List</h1>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
      <Footer />
    </div>
  );
  }
}

export default App;
