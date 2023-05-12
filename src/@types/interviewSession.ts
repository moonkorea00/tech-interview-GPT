export interface Session {
  id: string;
  question: string;
  transcript: string;
  response: string;
  search: string;
}

export interface SessionContext {
  session?: Session;
  sessions: Session[];
  readSessions: (initialValue?: never[]) => Session[] | [];
  saveSession: (session: Session) => void;
  deleteSession: (id: string) => void;
  readSessionById: (id: string) => void;
}
