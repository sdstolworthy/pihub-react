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
    console.log(process.env)
    WeatherService.get_weather().then((weather)=>{
      this.setState({weather})
      console.log('in then')
      console.log(weather)
    })
  }

  render() {
    return (
      <div className="weather-container">
        {JSON.stringify(this.state.weather,null,2)}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    weather: state.weather
  }
}
function mdtp(dispatch, props){
  return {
    getWeather: ()=>dispatch(get_weather())
  }
}

export default connect(mapStateToProps,mdtp)(Weather)