import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      input3: "",
      pet: "Dog"
    };
  }
  render() {
    return (
      <div>
        <form style={{"textAlign":"center"}}>
          <h3>Form</h3>
            <label>Input 1:
              <input type="text" name="input1" onChange={null}/>
            </label><br/>
            <label>Input 2:
              <input type="text" name="input2" onChange={null}/>
            </label><br/>
          <label>Input 3:
              <input type="text" name="input3" onChange={null}/>
            </label><br/>
          <select name="pet" onChange={null}>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Hamster">Hamster</option>
              <option value="Parrot">Parrot</option>
              <option value="Spider">Spider</option>
              <option value="Goldfish">Goldfish</option>
            </select>
        </form>
        <h4>Input 1 is: </h4>
        <h4>Input 2 is: </h4>
        <h4>Input 3 is: </h4>
        <h4>Pet is: </h4>
      </div>

    );
  }

}

export default Form;
