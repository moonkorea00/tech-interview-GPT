import type { Session as SessionType } from '@@types/interviewSession';
// import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DialogueInput from '@components/common/DialogueInput';
import user from '@assets/Main/user.svg';
import chatGPT from '@assets/Main/ChatGPT.svg';
import ActionButton from '@components/common/Button';
import useForm from '@hooks/useForm';
import useSession from '@hooks/useSession';

const Session = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const navgiateToMainWithSearchParams = () => navigate(`/${(session as SessionType).search}`);

  const { handleRetryQuestion } = useForm(navgiateToMainWithSearchParams);

  const { session } = useSession(false, id);

  return (
    <main className="flex flex-col items-center gap-20 w-[950px]">
      <div className="flex flex-col items-center w-full">
        <DialogueInput src={user} transcript={session?.transcript as string} />
        <ActionButton
          onClickHandler={session ? handleRetryQuestion : () => navigate('/')}
          variant="primary"
          label={session ? 'Try question again' : 'Start new interview'}
        />
      </div>
      <DialogueInput
        src={chatGPT}
        transcript={
          session
            ? `Question: \n\n ${session.question} \n\n Response: \n\n ${session.response}`
            : `Couldn't find your session history. Try Starting a new Interview.`
        }
      />
    </main>
  );
};

export default Session;
