import React, { Component } from 'react'
import { connect } from 'react-redux'
import {get_news} from '../../redux/actions/news'
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
    return (
      <div >
        <pre>{JSON.stringify(this.props.news,null,2)}</pre>
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