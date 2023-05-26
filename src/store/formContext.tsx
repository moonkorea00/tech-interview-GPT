/* eslint-disable react-refresh/only-export-components */
import type { Dispatch } from 'react';
import type { Action, State } from '@@types/form';
import { createContext, useContext, useReducer } from 'react';
import { formReducer, initialState } from '@reducer/formReducer';

type ContextProviderProps = {
  children: React.ReactNode;
};

export const FormContext = createContext<State | null>(null);
export const FormDispatchContext = createContext<Dispatch<Action> | null>(null);

export const FormProvider = ({ children }: ContextProviderProps) => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={formState}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
};

export const useFormSelector = (): State => {
  const state = useContext(FormContext);

  if (!state) throw new Error('Form Provider not found');
  return state;
};

export const useFormDispatch = (): React.Dispatch<Action> => {
  const dispatch = useContext(FormDispatchContext);

  if (!dispatch) throw new Error('Form Provider not found');
  return dispatch;
};
