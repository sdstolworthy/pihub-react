import WeatherService from '../../services/WeatherService'

// === ACTION TYPES

export const SET_WEATHER = 'SET_WEATHER'


// == BASIC ACTIONS

export function set_weather(weather) {
  return {
    type: SET_WEATHER,
    weather
  }
}

export function get_weather() {
  return (dispatch) => {
    return WeatherService.get_weather().then(weather=>{
      dispatch(set_weather(weather))

    })
  }
}