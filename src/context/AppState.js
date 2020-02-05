import React, { useReducer } from 'react';
import AppContext from './appContext';
import AppReducer from './appReducer';
import axios from 'axios';

import { GET_ANIMES, MODAL_TRIGGER, LOADING } from './types';

const AppState = props => {
  const initialState = {
    animes: [],
    modalTrigger: false,
    loading: false,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // axios headers config
  const config = {
    headers: {
      'x-rapidapi-host': 'jikan1.p.rapidapi.com',
      'x-rapidapi-key': 'f47ade91e8msh4bac2934a97b27bp1ffdc5jsn2f9b778383ca',
    },
  };

  const setModalTrigger = trigger => {
    dispatch({
      type: MODAL_TRIGGER,
      payload: trigger,
    });
  };

  const setLoading = loading => {
    dispatch({
      type: LOADING,
      payload: loading,
    });
  };

  const getAnimes = async dayOfWeek => {
    setLoading(true);
    const res = await axios.get(
      `https://jikan1.p.rapidapi.com/schedule/${dayOfWeek}`,
      config,
    );
    if (dayOfWeek === 'saturday') {
      dispatch({
        type: GET_ANIMES,
        payload: res.data.saturday,
      });
    }
    if (dayOfWeek === 'sunday') {
      dispatch({
        type: GET_ANIMES,
        payload: res.data.sunday,
      });
    }
    if (dayOfWeek === 'monday') {
      dispatch({
        type: GET_ANIMES,
        payload: res.data.monday,
      });
    }
    if (dayOfWeek === 'tuesday') {
      dispatch({
        type: GET_ANIMES,
        payload: res.data.tuesday,
      });
    }
    if (dayOfWeek === 'wednesday') {
      dispatch({
        type: GET_ANIMES,
        payload: res.data.wednesday,
      });
    }
    if (dayOfWeek === 'thursday') {
      dispatch({
        type: GET_ANIMES,
        payload: res.data.thursday,
      });
    }
    if (dayOfWeek === 'friday') {
      dispatch({
        type: GET_ANIMES,
        payload: res.data.friday,
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        animes: state.animes,
        modalTrigger: state.modalTrigger,
        loading: state.loading,
        setLoading,
        setModalTrigger,
        getAnimes,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
