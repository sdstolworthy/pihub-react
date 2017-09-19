import React, {Component} from 'react'
import Weather from './weather'
import News from './news'
import Calendar from './calendar'

export default class Containers extends Component {
  render(){
    return(
      <div className='container'>
        <Weather/>
        <News/>
      </div>
    )
  }
}