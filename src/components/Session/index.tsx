import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DialogueInput from '@components/common/DialogueInput';
import user from '@assets/Main/user.svg';
import chatGPT from '@assets/Main/ChatGPT.svg';
import { PrimaryButton } from '@components/common/Button';
import useForm from '@hooks/useForm';
import { useInterviewSessionSelector } from '@hooks/useInterviewSessionContext';
import { Session as SessionType } from '@@types/interviewSession';

const Session = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { handleRetryQuestion } = useForm();
  const { session, readSessionById } = useInterviewSessionSelector();

  const onRetry = () => {
    handleRetryQuestion((session as SessionType).question);
    navigate(`/${(session as SessionType).search}`);
  };

  useEffect(() => readSessionById(id as string), [id, session, readSessionById]);

  return (
    <main className="flex flex-col items-center gap-20 w-[950px]">
      <div className="flex flex-col items-center w-full">
        <DialogueInput src={user} transcript={session?.transcript as string} />
        <PrimaryButton onClickHandler={session ? onRetry : () => navigate('/')}>
          {session ? 'Try question again' : 'Start new interview'}
        </PrimaryButton>
      </div>
      <DialogueInput
        src={chatGPT}
        transcript={
          session
            ? `Question: \n\n ${session.question} \n\n Response: \n\n ${(session.response)}`
            : `Couldn't find your session history. Try Starting a new Interview.`
        }
      />
    </main>
  );
};

export default Session;
