import React, { Component } from 'react'
import WeatherService from '../../services/WeatherService'
import { connect } from 'react-redux'
import {get_weather} from '../../redux/actions/weather'
import './weather.css'

class Weather extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weather: null
    }
  }
  componentDidMount() {
    this.props.getWeather()
  }

  render() {
    return (
      <div className="weather-container">
        {/*JSON.stringify(this.props.weather,null,2)*/}
      </div>
    )
  }
}

const MSTP = ({weather}) => ({weather})
function mdtp(dispatch){
  return {
    getWeather: ()=>dispatch(get_weather())
  }
}

export default connect(MSTP,mdtp)(Weather)