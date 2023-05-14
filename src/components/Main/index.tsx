import InterviewOptions from './Options';
import ResponseSection from './ModelResponsePanel';
import UserRequestPanel from './UserRequestPanel';
import { OPTIONS_DATA } from './Options/constants';

const Main = () => {
  return (
    <main className="flex flex-col items-center gap-12">
      <div className="flex">
        {OPTIONS_DATA.map(option => (
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
