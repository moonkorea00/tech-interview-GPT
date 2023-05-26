import InterviewOption from './InterviewOption';
import { INTERVIEW_OPTIONS } from '../constants/InterviewOptions';

const InterviewOptionsPanel = () => {
  return (
    <section className="flex sm:flex-col xl:max-w-[700px] md:max-w-[450px] flex-wrap gap-6 sm:gap-3 sm:pl-12">
      {INTERVIEW_OPTIONS.map(option => (
        <InterviewOption key={option.id} option={option} />
      ))}
    </section>
  );
};

export default InterviewOptionsPanel;
