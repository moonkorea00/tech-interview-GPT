/* eslint-disable react-refresh/only-export-components */
import type { Dispatch } from 'react';
import type { State, Action } from '@@types/interviewSession';
import { createContext, useContext, useReducer } from 'react';
import { initialState, sessionReducer } from '@reducer/sessionReducer';

type ContextProviderProps = {
  children: React.ReactNode;
};

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

export const useInterviewSessionSelector = () => {
  const value = useContext(InterviewSessionContext);

  if (!value) {
    throw new Error('Interview Session Provider not found');
  }
  return value;
};

export const useInterviewSessionDispatch = () => {
  const dispatch = useContext(InterviewSessionDispatchContext);

  if (!dispatch) {
    throw new Error('Interview Session Provider not found');
  }
  return dispatch;
};
