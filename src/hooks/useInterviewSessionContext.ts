import { useContext } from 'react';
import { InterviewSessionContext } from '@store/interviewSessionContext';

export const useInterviewSessionSelector = () => {
  const value = useContext(InterviewSessionContext);

  if (!value) {
    throw new Error('Interview Session Provider not found');
  }
  return value;
};
