export interface Session {
  id: string;
  question: string;
  transcript: string;
  response: string;
  search: string;
}

export interface SessionContext {
  sessions: Session[];
  readSessions: (initialValue?: never[]) => Session[] | [];
  saveSession: (session: Session) => void;
  deleteSession: (id: string) => void;
  retake: () => void;
}