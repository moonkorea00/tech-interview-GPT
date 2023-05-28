import type { Reducer } from 'react';
import type { State, Action } from '@@types/form';

const initialResponse =
  'Before we start, tell me more about yourself by filling out the options above. Your OpenAI key wont be required until you submit your answer so feel free to start the interview!';

export const initialState = {
  formValues: {
    apiKey: '',
    question: '',
    transcript: '',
    editedTranscript: '',
  },
  modelResponse: initialResponse,
  isLoading: false,
  isValid: false,
  isEditing: false,
  isRetry: false,
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
        formValues: {
          ...state.formValues,
          [payload.name]: payload.value,
        },
      };
    case 'FORM/UPDATE_TRANSCRIPT':
      return {
        ...state,
        formValues: {
          ...state.formValues,
          transcript: payload,
        },
      };
    case 'FORM/GET_QUESTION':
      return {
        ...state,
        formValues: {
          ...state.formValues,
          question: payload,
          transcript: '',
          editedTranscript: '',
        },
        modelResponse: payload,
        isRetry: false,
      };
    case 'FORM/EDIT_START':
      return {
        ...state,
        formValues: {
          ...state.formValues,
          editedTranscript: payload,
        },
        isEditing: true,
      };
    case 'FORM/EDIT_SAVE':
      return {
        ...state,
        formValues: {
          ...state.formValues,
          transcript: payload,
        },
        isEditing: false,
      };
    case 'FORM/EDIT_CANCEL':
      return {
        ...state,
        formValues: {
          ...state.formValues,
          editedTranscript: payload,
        },
        isEditing: false,
      };
    case 'FORM/RESET':
      return initialState;
    case 'FORM/RETRY_QUESTION':
      return {
        ...state,
        formValues: { ...state.formValues, question: payload },
        modelResponse: payload,
        isValid: true,
        isRetry: true,
      };
    default:
      return state;
  }
};
