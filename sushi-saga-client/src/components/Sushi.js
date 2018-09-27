import React, { Fragment } from 'react'

class Sushi extends React.Component{
  constructor(props) {
    super(props);
    this.state =
    {clicked: false};
  }

  clicked = () => {
    if(!this.state.clicked){
      this.setState({clicked: true})
      this.props.eatSushi(this.props.sushi)
    }
  }

  render(){
    const {img_url, name, price} = this.props.sushi
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.clicked}>
          {
            /* Tell me if this sushi has been eaten! */
            this.state.clicked ?
              null
            :
              <img src={img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    )
  }

}

export default Sushi
