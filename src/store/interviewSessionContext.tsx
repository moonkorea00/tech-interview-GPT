import type { Session, SessionContext } from '@@types/interviewSession';
import type { ContextProviderProps } from './store.types';
import { createContext, useState, useEffect } from 'react';

export const InterviewSessionContext = createContext<SessionContext | null>(
  null
);

export const InterviewSessionProvider = ({
  children,
}: ContextProviderProps) => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [session, setSession] = useState<Session>();

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

  const readSessionById = (id: string) => {
    const session = sessions.find(session => session.id === id);
    setSession(session);
  };

  useEffect(() => setSessions(readSessions()), []);

  return (
    <InterviewSessionContext.Provider
      value={{
        session,
        sessions,
        readSessions,
        saveSession,
        deleteSession,
        readSessionById,
      }}
    >
      {children}
    </InterviewSessionContext.Provider>
  );
};