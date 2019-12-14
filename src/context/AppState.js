import React, { useReducer } from 'react';
import AppContext from './appContext';
import AppReducer from './appReducer';
import axios from 'axios';

import {
  GET_FRIDAY,
  GET_MONDAY,
  GET_SATURDAY,
  GET_SUNDAY,
  GET_THURSDAY,
  GET_TUESDAY,
  GET_WEDNESDAY,
} from './types';

const AppState = props => {
  const initialState = {
    saturday: [],
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // axios headers config
  const config = {
    headers: {
      'x-rapidapi-host': 'jikan1.p.rapidapi.com',
      'x-rapidapi-key': 'f47ade91e8msh4bac2934a97b27bp1ffdc5jsn2f9b778383ca',
    },
  };

  const getSaturday = async () => {
    const res = await axios.get(
      `https://jikan1.p.rapidapi.com/schedule/saturday`,
      config,
    );
    dispatch({
      type: GET_SATURDAY,
      payload: res.data.saturday,
    });
  };
  const getSunday = async () => {
    const res = await axios.get(
      `https://jikan1.p.rapidapi.com/schedule/sunday`,
      config,
    );
    dispatch({
      type: GET_SUNDAY,
      payload: res.data.sunday,
    });
  };
  const getMonday = async () => {
    const res = await axios.get(
      `https://jikan1.p.rapidapi.com/schedule/monday`,
      config,
    );
    dispatch({
      type: GET_MONDAY,
      payload: res.data.monday,
    });
  };
  const getTuesday = async () => {
    const res = await axios.get(
      `https://jikan1.p.rapidapi.com/schedule/tuesday`,
      config,
    );
    dispatch({
      type: GET_TUESDAY,
      payload: res.data.tuesday,
    });
  };
  const getWednesday = async () => {
    const res = await axios.get(
      `https://jikan1.p.rapidapi.com/schedule/wednesday`,
      config,
    );
    dispatch({
      type: GET_WEDNESDAY,
      payload: res.data.wednesday,
    });
  };
  const getThursday = async () => {
    const res = await axios.get(
      `https://jikan1.p.rapidapi.com/schedule/thursday`,
      config,
    );
    dispatch({
      type: GET_THURSDAY,
      payload: res.data.thursday,
    });
  };
  const getFriday = async () => {
    const res = await axios.get(
      `https://jikan1.p.rapidapi.com/schedule/friday`,
      config,
    );
    dispatch({
      type: GET_FRIDAY,
      payload: res.data.friday,
    });
  };

  return (
    <AppContext.Provider
      value={{
        saturday: state.saturday,
        sunday: state.sunday,
        monday: state.monday,
        tuesday: state.tuesday,
        wednesday: state.wednesday,
        thursday: state.thursday,
        friday: state.friday,
        getSaturday,
        getSunday,
        getMonday,
        getTuesday,
        getWednesday,
        getThursday,
        getFriday,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
