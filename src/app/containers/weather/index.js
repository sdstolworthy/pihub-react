import React, { Component } from 'react'
import WeatherService from '../../services/WeatherService'
import './weather.css'

export default class Weather extends Component {

  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(process.env)
    WeatherService.get_weather().then((data)=>{
      console.log('in then')
    })
  }

  render() {
    return (
      <div className="weather-container">
      </div>
    )
  }
}