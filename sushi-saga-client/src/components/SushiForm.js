import React from 'react'

const SushiForm = (props) => (
  <div>
    <label>
      Filter By Name:
      <input type="text" name="filterTerm" onChange={props.handleForm}/>
    </label>
  </div>
);

export default SushiForm
