import React, { Component } from 'react'
import { connect } from 'react-redux'
import {get_news} from '../../redux/actions/news'
import Slider from 'react-slick'
import './news.css'

class News extends Component {

  constructor(props) {
    super(props)
    this.state = {
      news: null
    }
  }
  componentDidMount() {
    this.props.getNews()
  }

  render() {
    let sliderDivs = this.props.news.map((value,index)=>{
      return <div className="slider-content-container" key={index}>{value.title}</div>
    })
    console.log(sliderDivs)
    let slideSettings = {
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      slidesToShow:3,
      centerMode: true,
    }
    return (
      <div >
        <div className="slider-container">
          <Slider {...slideSettings}>{sliderDivs}</Slider>
        </div>
        <pre>{/*JSON.stringify(this.props.news,null,2)*/}</pre>
      </div>
    )
  }
}

const MSTP = ({news}) => ({news})
function mdtp(dispatch){
  return {
    getNews: ()=>dispatch(get_news())
  }
}

export default connect(MSTP,mdtp)(News)