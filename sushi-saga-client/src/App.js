import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/Form'
import SushiForm from './components/SushiForm'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props);
    // this.increaseCounter = this.increaseCounter.bind(this)
    this.state = {
      sushis: [],
      counter: 0,
      eatenSushi: [],
      filterTerm : ''
    };
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({sushis: sushis}))
  }

  increaseCounter = () =>{
    this.setState((prevState) => {
      return {counter: prevState.counter + 4}
    })
  }

  eatSushi = (sushi) => {
    this.setState((prevState) => {
      return {eatenSushi: [... prevState.eatenSushi, sushi]}
    })
  }

  handleForm = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  filterSushiArr = () => {
    return this.state.sushis.filter((sushi) => {
      return sushi.name.includes(this.state.filterTerm)
    })
  }

  render() {
    return (
      <div className="app">
      {  // <Form/>
    }

      <SushiForm handleForm={this.handleForm}/>
      <SushiContainer
        sushis={this.filterSushiArr().slice(this.state.counter, this.state.counter + 4)}
        increaseCounter={this.increaseCounter}
        eatSushi={this.eatSushi}
      />
    <Table eatenSushi={this.state.eatenSushi}/>

      </div>
    );
  }
}

export default App;
