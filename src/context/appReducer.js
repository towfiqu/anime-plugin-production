import {
  GET_FRIDAY,
  GET_MONDAY,
  GET_SATURDAY,
  GET_SUNDAY,
  GET_THURSDAY,
  GET_TUESDAY,
  GET_WEDNESDAY,
  MODAL_TRIGGER,
  LOADING,
} from './types';

export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case GET_WEDNESDAY:
      return {
        ...state,
        wednesday: action.payload,
        loading: false,
      };
    case GET_TUESDAY:
      return {
        ...state,
        tuesday: action.payload,
        loading: false,
      };
    case GET_MONDAY:
      return {
        ...state,
        monday: action.payload,
        loading: false,
      };
    case GET_SUNDAY:
      return {
        ...state,
        sunday: action.payload,
        loading: false,
      };
    case GET_SATURDAY:
      return {
        ...state,
        saturday: action.payload,
        loading: false,
      };
    case GET_FRIDAY:
      return {
        ...state,
        friday: action.payload,
        loading: false,
      };
    case GET_THURSDAY:
      return {
        ...state,
        thursday: action.payload,
        loading: false,
      };
    case MODAL_TRIGGER:
      return {
        ...state,
        modalTrigger: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
  }
};
