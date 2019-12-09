import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import './App.css';
import Weather from './components/Weather';

const weatherApi = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${Key}`
cosnt Key = 'b39eaf89c42e2831443f56ad24e682c9'

class App extends Component {

  render(){
  return (
    <div className="App">
     <h1>hello sexy weather app</h1>
     <Titles />
     <Form />
     <Weather />
    </div>
  )};
}

export default App;
