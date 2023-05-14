import InterviewOptions from './InterviewOptionsPanel';
import ResponseSection from './ModelResponsePanel';
import UserRequestPanel from './UserRequestPanel';
import { INTERVIEW_OPTIONS } from './constants';

const Main = () => {
  return (
    <main className="flex flex-col items-center gap-12">
      <div className="flex">
        {INTERVIEW_OPTIONS.map(option => (
          <InterviewOptions key={option.id} option={option} />
        ))}
      </div>
      <div className="flex flex-col gap-20">
        <UserRequestPanel />
        <ResponseSection />
      </div>
    </main>
  );
};

export default Main;
