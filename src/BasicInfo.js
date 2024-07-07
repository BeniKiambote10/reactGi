import React from 'react';
import './App.css';






class BasicInfo extends React.Component {
  render() {
    const { name, number, dob } = this.props.person;

    // VERY EASY: Inside of your ‘App’ class ‘render’ method, 
    // return a div with your basic information for example name, number, date of birth and etc. 
    // This div should be hard-coded to prepare for the Medium Challenge.


    return (
      <div className="person-info">
        <h1>Basic Information</h1>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
        <p>Date of Birth: {dob}</p>
      </div>
    );
  }
}

export default BasicInfo;
