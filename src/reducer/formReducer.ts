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
    case 'API/FETCH_START':
      return { ...state, isLoading: true };
    case 'API/FETCH_SUCCESS':
      return { ...state, modelResponse: payload };
    case 'API/FETCH_FAIL':
      return { ...state, modelResponse: payload };
    case 'API/FETCH_COMPLETE':
      return { ...state, isLoading: false };
    case 'FORM/VALIDATION_SUCCESS':
      return { ...state, isValid: true };
    case 'FORM/VALIDATION_FAIL':
      return { ...state, modelResponse: payload };
    case 'FORM/UPDATE_FIELD':
      return {
        ...state,
        [payload.name]: payload.value,
      };
    case 'FORM/UPDATE_TRANSCRIPT':
      return {
        ...state,
        transcript: payload,
      };
    case 'FORM/GET_QUESTION':
      return {
        ...state,
        question: payload,
        transcript: '',
        editedTranscript: '',
        modelResponse: payload,
      };
    case 'FORM/EDIT_START':
      return { ...state, editedTranscript: payload, isEditing: true };
    case 'FORM/EDIT_SAVE':
      return {
        ...state,
        transcript: payload,
        isEditing: false,
      };
    case 'FORM/EDIT_CANCEL':
      return {
        ...state,
        editedTranscript: payload,
        isEditing: false,
      };
    default:
      return state;
  }
};
