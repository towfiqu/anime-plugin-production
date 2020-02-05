import { GET_ANIMES, MODAL_TRIGGER, LOADING } from './types';

export default (state, action) => {
  switch (action.type) {
    default:
      return state;

    case GET_ANIMES:
      return {
        ...state,
        animes: action.payload,
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
