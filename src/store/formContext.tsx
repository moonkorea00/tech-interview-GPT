import type { Action, State } from '@@types/form';
import type { ContextProviderProps } from './store.types';
import { createContext, useReducer, Dispatch } from 'react';
import { formReducer, initialState } from '@reducer/formReducer';

export const FormContext = createContext<State | null>(null);
export const DispatchContext = createContext<Dispatch<Action> | null>(null);

export const FormProvider = ({ children }: ContextProviderProps) => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={formState}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </FormContext.Provider>
  );
};
