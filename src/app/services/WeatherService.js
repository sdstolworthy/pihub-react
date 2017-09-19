import axios from 'axios'
export default class WeatherService {
  static get_weather(){
      return axios.get('https://api.openweathermap.org/data/2.5/weather?id=4047656&APPID='+process.env.REACT_APP_WEATHER_SECRET).then((data)=>{ 
        return data.data
    })
  }
}