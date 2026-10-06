import {useState} from 'react'
import './index.css'
const Speedometer = () => {
  const [speed, setSpeed] = useState(0)
  const onClickApplyBrakeButton = () => {
    setSpeed(prevSpeed => prevSpeed - 10)
  }

  const onClickAccelerateButton = () => {
    setSpeed(prevSpeed => prevSpeed + 10)
  }

  return (
    <div className="speedometer-app-container">
      <div className="speedometer-container ">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer-image"
        />
        <h1 className="speed-text">Speed is {speed}mph</h1>
        <p className="speed-limits">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            type="button"
            className="accelerate-button button"
            onClick={onClickAccelerateButton}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="apply-brake-button button"
            onClick={onClickApplyBrakeButton}
          >
            Apply Brake
          </button>
        </div>
      </div>
    </div>
  )
}

export default Speedometer
