import {combineReducers} from 'redux'

import weather from './weather'
import news from './news'
export default combineReducers({
  weather,
  news
})