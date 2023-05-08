export interface formValuesProps {
  apiKey: string;
  question: string;
  transcript: string;
  editedTranscript: string;
}

export interface State extends formValuesProps {
  isLoading: boolean;
  modelResponse: string;
  isValid: boolean;
  isEditing: boolean;
}

export type Action =
  | {
      type: 'UPDATE_FORM';
      payload: { name: keyof State | string; value: string };
    }
  | { type: 'UPDATE_TRANSCRIPT'; payload: string }
  | { type: 'START_EDIT'; payload: string }
  | { type: 'SAVE_EDIT'; payload: string }
  | { type: 'CANCEL_EDIT'; payload: string }
  | { type: 'GET_QUESTION'; payload: string }
  | { type: 'VALIDATION_ERROR'; payload: string }
  | { type: 'VALIDATION_VALID'; payload?: never }
  | { type: 'FETCH_INIT'; payload?: never }
  | { type: 'FETCH_SUCCESS'; payload: any }
  | { type: 'FETCH_ERROR'; payload: any }
  | { type: 'FETCH_SETTLED'; payload?: never };
