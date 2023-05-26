import type { Session } from '@@types/interviewSession';
import { useEffect } from 'react';
import {
  useInterviewSessionSelector,
  useInterviewSessionDispatch,
} from '@store/interviewSessionContext';
import { storage } from '@utils/localStorage';

const useSession = (skip = true, params: string | undefined = undefined) => {
  const { sessions, session } = useInterviewSessionSelector();
  const dispatch = useInterviewSessionDispatch();

  const ITEM_KEY = 'interview_sessions';

  const readSessions = (initialValue = []): Session[] | [] => {
    try {
      const sessions = storage.get<Session[]>(ITEM_KEY);
      if (sessions) {
        return sessions;
      } else {
        storage.set(ITEM_KEY, initialValue);
        return initialValue;
      }
    } catch (err) {
      console.warn(`Error reading item with ${ITEM_KEY}`);
      return initialValue;
    }
  };

  const saveSession = (value: Session) => {
    try {
      storage.set(ITEM_KEY, [...sessions, value]);
      dispatch({ type: 'SESSION/SAVE_SESSION', payload: value });
    } catch (err) {
      console.warn(`Failed to save session : ${err}`)
    }
  };

  const deleteSession = (id: string) => {
    try {
      const newSessions = readSessions().filter(
        (session: Session) => session.id !== id
      );
      storage.set(ITEM_KEY, newSessions);
      dispatch({ type: 'SESSION/DELETE_SESSION', payload: newSessions });
    } catch (err) {
      console.warn(`Failed to delete session : ${err}`)
    }
  };

  const readSessionById = () => {
    if (skip) return;
    dispatch({ type: 'SESSION/GET_SESSION', payload: params });
  };

  useEffect(() => {
    dispatch({ type: 'SESSION/GET_SESSIONS', payload: readSessions() });
  }, []);

  useEffect(readSessionById, [session, params]);

  return { session, saveSession, deleteSession };
};

export default useSession;
