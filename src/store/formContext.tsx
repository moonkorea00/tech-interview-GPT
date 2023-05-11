import { createContext, useReducer, ReactNode, Dispatch } from 'react';
import { formReducer, initialState } from '@reducer/formReducer';
import { Action, State } from '@@types/form';

type ContextProviderProps = {
  children: ReactNode;
};

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
