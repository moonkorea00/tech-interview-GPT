import type { Reducer } from 'react';
import type { State, Action } from '@@types/interviewSession';

export const initialState = {
  sessions: [],
  session: null,
};

export const sessionReducer: Reducer<State, Action> = (
  state,
  { type, payload }
) => {
  switch (type) {
    case 'SESSION/GET_SESSIONS':
      return {
        ...state,
        sessions: payload,
      };
    case 'SESSION/SAVE_SESSION':
      return {
        ...state,
        sessions: [...state.sessions, payload],
      };
    case 'SESSION/DELETE_SESSION':
      return {
        ...state,
        sessions: payload,
      };
    case 'SESSION/GET_SESSION':
      return {
        ...state,
        session: state.sessions.find(session => session.id === payload),
      };
    default:
      return state;
  }
};
