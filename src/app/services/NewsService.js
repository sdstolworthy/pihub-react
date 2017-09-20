import axios from 'axios'
export default class NewsService {
  static get_news(){
      return axios.get('https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey='+process.env.REACT_APP_NEWS_API).then((data)=>{ 
        return data.data.articles
    })
  }
}