import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import './App.css';

class App extends Component {

  render(){
  return (
    <div className="App">
     <h1>hello sexy weather app</h1>
     <Titles />
     <Form />
    </div>
  )};
}

export default App;
