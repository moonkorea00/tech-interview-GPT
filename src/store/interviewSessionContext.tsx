import type { Dispatch } from 'react';
import type { State, Action } from '@@types/interviewSession';
import type { ContextProviderProps } from './store.types';
import { createContext, useReducer } from 'react';
import { initialState, sessionReducer } from '@reducer/sessionReducer';

export const InterviewSessionContext = createContext<State | null>(null);
export const InterviewSessionDispatchContext =
  createContext<Dispatch<Action> | null>(null);

export const InterviewSessionProvider = ({
  children,
}: ContextProviderProps) => {
  const [sessionState, dispatch] = useReducer(sessionReducer, initialState);

  return (
    <InterviewSessionContext.Provider value={sessionState}>
      <InterviewSessionDispatchContext.Provider value={dispatch}>
        {children}
      </InterviewSessionDispatchContext.Provider>
    </InterviewSessionContext.Provider>
  );
};
