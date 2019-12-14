import {
  GET_FRIDAY,
  GET_MONDAY,
  GET_SATURDAY,
  GET_SUNDAY,
  GET_THURSDAY,
  GET_TUESDAY,
  GET_WEDNESDAY,
} from './types';

export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case GET_WEDNESDAY:
      return {
        ...state,
        wednesday: action.payload,
      };
    case GET_TUESDAY:
      return {
        ...state,
        tuesday: action.payload,
      };
    case GET_MONDAY:
      return {
        ...state,
        monday: action.payload,
      };
    case GET_SUNDAY:
      return {
        ...state,
        sunday: action.payload,
      };
    case GET_SATURDAY:
      return {
        ...state,
        saturday: action.payload,
      };
    case GET_FRIDAY:
      return {
        ...state,
        friday: action.payload,
      };
    case GET_THURSDAY:
      return {
        ...state,
        thursday: action.payload,
      };
  }
};
