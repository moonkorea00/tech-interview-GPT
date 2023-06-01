import type { MouseEventHandler, ReactNode } from 'react';

export interface FormValues {
  apiKey: string;
  question: string;
  transcript: string;
  editedTranscript: string;
}

export interface State {
  formValues: FormValues;
  modelResponse: string;
  isLoading: boolean;
  isValid: boolean;
  isEditing: boolean;
  isRetry: boolean;
}

export type Action =
  | { type: 'API/FETCH_START'; payload?: never }
  | { type: 'API/FETCH_SUCCESS'; payload: string }
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
  | { type: 'FORM/EDIT_CANCEL'; payload: string }
  | { type: 'FORM/RESET'; payload?: never }
  | { type: 'FORM/RETRY_QUESTION'; payload: string };

export type ActionButtonProps = {
  id?: number;
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  variant: string;
  label: string | ReactNode;
  tooltipContent?: string;
  setTooltipContent?: (React.Dispatch<React.SetStateAction<string>>);
  className?: string;
  disabled?: boolean;
};
