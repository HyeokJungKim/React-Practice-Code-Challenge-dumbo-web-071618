import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sushi: [],
      displayedSushi: [],
      index: 0,
      eatenSushi: [],
      wallet: 100
    }
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushiArr => this.setState((prevState) => {
        return {sushi: sushiArr, displayedSushi:sushiArr.slice(0,4)}
      })
    )
  }

  eatSushi = (id) => {
    this.setState((prevState) => {
      const sushi = prevState.sushi.find((sushi) => {
        return sushi.id === id
      })
      if(!prevState.eatenSushi.includes(sushi) && prevState.wallet - sushi.price > 0 ){
        return (
          {eatenSushi: [...prevState.eatenSushi, sushi],
            wallet: prevState.wallet - sushi.price
          }
        )
      }
    })
  }

  pressNextButton = () => {
    this.setState((prevState) => {
      let num = prevState.index + 1
      if(num === 25){
        num = 0
      }
      return({index: num, displayedSushi: prevState.sushi.slice(num*4, (num+1)*4)})
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          displayedSushi={this.state.displayedSushi}
          pressNextButton={this.pressNextButton}
          eatenSushi={this.state.eatenSushi}
          eatSushi={this.eatSushi}
        />
      <Table
        eatenSushi={this.state.eatenSushi}
        wallet={this.state.wallet}
      />
      </div>
    );
  }
}

export default App;
