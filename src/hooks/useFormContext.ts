import { useContext } from 'react';
import { FormContext,DispatchContext } from '@store/FormContext';
import { State, Action } from '@@types/form';

export const useFormSelector = (): State => {
  const state = useContext(FormContext);

  if (!state) throw new Error('Form Provider not found');
  return state;
};

export const useFormDispatch = (): React.Dispatch<Action> => {
  const dispatch = useContext(DispatchContext);

  if (!dispatch) throw new Error('Form Provider not found');
  return dispatch;
};