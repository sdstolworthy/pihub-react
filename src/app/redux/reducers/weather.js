import { SET_WEATHER } from '../actions/weather'

export default function (state = [], { type, ...action }) {
  switch (type) {
    case SET_WEATHER:
      return action.SET_WEATHER;
    default:
      return state;
  }
}