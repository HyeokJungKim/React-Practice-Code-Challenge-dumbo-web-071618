import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "Kyle",
      input2: "Isiah",
      input3: "Ty",
      pet: "Dog"
    };
  }

  handleChange = (event) => {
    // console.log(event.target.name);
    this.setState({[event.target.name]: event.target.value})
  }


  render() {
    return (
      <div>
        <form style={{"textAlign":"center"}}>
          <h3>Form</h3>
            <label>Input 1:
              <input type="text" name="input1" onChange={this.handleChange} value={this.state.input1}/>
            </label><br/>
            <label>Input 2:
              <input type="text" name="input2" onChange={this.handleChange} value={this.state.input2}/>
            </label><br/>
          <label>Input 3:
              <input type="text" name="input3" onChange={this.handleChange} value={this.state.input3}/>
            </label><br/>

          <select name="pet" onChange={this.handleChange}>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Hamster">Hamster</option>
              <option value="Parrot">Parrot</option>
              <option value="Spider">Spider</option>
              <option value="Goldfish">Goldfish</option>
            </select>
        </form>
        <h4>Input 1 is: {this.state.input1}</h4>
        <h4>Input 2 is: {this.state.input2}</h4>
        <h4>Input 3 is: {this.state.input3}</h4>
        <h4>Pet is: {this.state.pet}</h4>
      </div>

    );
  }

}

export default Form;
