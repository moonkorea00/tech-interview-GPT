export interface Session {
  id: string;
  question: string;
  transcript: string;
  response: string;
  search: string;
}

export interface State {
  sessions: Session[] | [];
  session?: Session | null;
}

export type Action =
  | { type: 'SESSION/GET_SESSIONS'; payload: Session[] | [] }
  | { type: 'SESSION/SAVE_SESSION'; payload: Session }
  | { type: 'SESSION/DELETE_SESSION'; payload: Session[] }
  | { type: 'SESSION/GET_SESSION'; payload?: string };
