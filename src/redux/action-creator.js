import { ADD_PERIOD, ADD_PARAM } from './action';

export const addPeriodAC = (period) => ({
  type: ADD_PERIOD,
  newPeriod: period
});

export const addParamAC = (param) => ({
  type: ADD_PARAM,
  newParam: param
});
