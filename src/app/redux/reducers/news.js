import { SET_NEWS } from '../actions/news'

export default function (state = {}, { type, ...action }) {
  switch (type) {
    case SET_NEWS:
      return action.news;
    default:
      return state;
  }
}