import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
          props.displayedSushi.map((sushi) => {
            return(
            <Sushi
              key={sushi.id}
              sushi={sushi}
              eatenSushi={props.eatenSushi}
              eatSushi={props.eatSushi}
            />)
          })
        }
        <MoreButton pressNextButton={props.pressNextButton} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
