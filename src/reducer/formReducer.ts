import { Reducer } from 'react';
import { initialResponse } from '@utils/form';
import { State, Action } from '@@types/form';

export const initialState = {
  apiKey: '',
  question: '',
  transcript: '',
  editedTranscript: '',
  isLoading: false,
  modelResponse: initialResponse,
  isValid: false,
  isEditing: false,
};

export const formReducer: Reducer<State, Action> = (
  state,
  { type, payload }
) => {
  switch (type) {
    case 'FETCH_INIT':
      return { ...state, loading: true };
    // case 'FETCH_SUCCESS':
    //   return { ...state, modelResponse: payload }; // TODO
    case 'FETCH_ERROR':
      return { ...state, modelResponse: payload };
    case 'FETCH_SETTLED':
      return { ...state, loading: false };
    case 'UPDATE_FORM':
      return {
        ...state,
        [payload.name]: payload.value,
      };
    case 'UPDATE_TRANSCRIPT':
      return {
        ...state,
        transcript: payload,
      };
    case 'START_EDIT':
      return { ...state, editedTranscript: payload, isEditing: true };
    case 'SAVE_EDIT':
      return {
        ...state,
        transcript: payload,
        isEditing: false,
      };
    case 'CANCEL_EDIT':
      return {
        ...state,
        editedTranscript: payload,
        isEditing: false,
      };
    case 'GET_QUESTION':
      return {
        ...state,
        question: payload,
        transcript: '',
        editedTranscript: '',
        modelResponse: payload,
      };
    case 'VALIDATION_ERROR':
      return { ...state, modelResponse: payload };
    case 'VALIDATION_VALID':
      return { ...state, isValid: true };
    default:
      return state;
  }
};
