import InterviewOption from './InterviewOption';
import { INTERVIEW_OPTIONS } from '../constants';

const InterviewOptionsPanel = () => {
  return (
    <section className="flex">
      {INTERVIEW_OPTIONS.map(option => (
        <InterviewOption key={option.id} option={option} />
      ))}
    </section>
  );
};

export default InterviewOptionsPanel;
