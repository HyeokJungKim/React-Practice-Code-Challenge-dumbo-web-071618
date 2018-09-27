import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/Form'
import SushiForm from './components/SushiForm'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  render() {
    return (
      <div className="app">
        {// <Form/>
        }
        <SushiForm />
        <SushiContainer  />
        <Table />

      </div>
    );
  }
}

export default App;
