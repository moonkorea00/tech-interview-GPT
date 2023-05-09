export interface formValuesProps {
  apiKey: string;
  question: string;
  transcript: string;
  editedTranscript: string;
}

export interface State extends formValuesProps {
  isLoading: boolean;
  modelResponse: string | JSX.Element[];
  isValid: boolean;
  isEditing: boolean;
}

export type Action =
  | { type: 'API/FETCH_START'; payload?: never }
  | { type: 'API/FETCH_SUCCESS'; payload: JSX.Element[] }
  | { type: 'API/FETCH_FAIL'; payload: string }
  | { type: 'API/FETCH_COMPLETE'; payload?: never }
  | { type: 'FORM/VALIDATION_SUCCESS'; payload?: never }
  | { type: 'FORM/VALIDATION_FAIL'; payload: string }
  | {
      type: 'FORM/UPDATE_FIELD';
      payload: { name: keyof State | string; value: string };
    }
  | { type: 'FORM/UPDATE_TRANSCRIPT'; payload: string }
  | { type: 'FORM/GET_QUESTION'; payload: string }
  | { type: 'FORM/EDIT_START'; payload: string }
  | { type: 'FORM/EDIT_SAVE'; payload: string }
  | { type: 'FORM/EDIT_CANCEL'; payload: string };
