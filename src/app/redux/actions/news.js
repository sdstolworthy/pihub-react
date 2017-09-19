import NewsService from '../../services/NewsService'

// === ACTION TYPES

export const SET_NEWS = 'SET_NEWS'


// == BASIC ACTIONS

export function set_news(news) {
  return {
    type: SET_NEWS,
    news
  }
}

// == THUNK ACTIONS

export function get_news() {
  return (dispatch) => {
    return NewsService.get_news().then(news=>{
      console.log('NEWS:',news)
      dispatch(set_news(news))
    })
  }
}