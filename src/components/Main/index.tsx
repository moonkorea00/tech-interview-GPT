import InterviewOptionsPanel from './InterviewOptionsPanel';
import ModelResponsePanel from './ModelResponsePanel';
import UserRequestPanel from './UserRequestPanel';

const Main = () => {
  return (
    <main className="flex flex-col items-center gap-12">
      <InterviewOptionsPanel />
      <div className="flex flex-col gap-20">
        <UserRequestPanel />
        <ModelResponsePanel />
      </div>
    </main>
  );
};

export default Main;
