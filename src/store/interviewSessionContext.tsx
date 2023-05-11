import { createContext, useState, useEffect } from 'react';
import { ContextProviderProps } from './store.types';
import { Session, SessionContext } from '@@types/interviewSession';

export const InterviewSessionContext = createContext<SessionContext | null>(
  null
);

export const InterviewSessionProvider = ({
  children,
}: ContextProviderProps) => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const itemKey = 'interview_sessions';

  const readSessions = (initialValue = []): Session[] | [] => {
    try {
      const sessions = localStorage.getItem(itemKey);
      if (sessions) {
        return JSON.parse(sessions);
      } else {
        localStorage.setItem(itemKey, JSON.stringify(initialValue));
        return initialValue;
      }
    } catch (err) {
      console.warn(`Error reading item with ${itemKey}`);
      return initialValue;
    }
  };

  const saveSession = (session: Session) => {
    try {
      localStorage.setItem(
        itemKey,
        JSON.stringify([...readSessions(), session])
      );
      setSessions(prev => [...prev, session]);
    } catch (err) {
      // handleQuotaError();
    }
  };

  const deleteSession = (id: string) => {
    const newSessions = readSessions().filter(
      (session: Session) => session.id !== id
    );
    localStorage.setItem(itemKey, JSON.stringify(newSessions));
    setSessions(newSessions);
  };

  const retakeSession = (search: string, question: string) => {
    // navigate(`/${search}`);
    // handleSetQuestion(question)
  };

  useEffect(() => setSessions(readSessions()), []);

  return (
    <InterviewSessionContext.Provider
      value={{
        sessions,
        readSessions,
        saveSession,
        deleteSession,
        retakeSession,
      }}
    >
      {children}
    </InterviewSessionContext.Provider>
  );
};
