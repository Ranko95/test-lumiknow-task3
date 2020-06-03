import { ADD_PERIOD, ADD_PARAM } from './action';
import { bond } from './mock';

const initialState = {
  period: 'week',
  param: 'price',
  bond,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERIOD:
      return { ...state, period: action.newPeriod }

    case ADD_PARAM:
      return { ...state, param: action.newParam }

    default:
      return { ...state }
  }
}
