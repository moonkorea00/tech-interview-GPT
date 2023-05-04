import { useState, Dispatch, SetStateAction } from 'react';
import RequestInput from './RequestInput';
import { PrimaryButton, SecondaryButton } from '@components/common/Button';
import user from '@assets/user.svg';

type RequestSectionProps = {
  isValid: boolean;
  isLoading: boolean;
  handleValidate: () => void;
  handleSubmit: () => Promise<void>;
  transcript: string;
  setTranscript: Dispatch<SetStateAction<string>>;
  isRecording: boolean;
  startSpeechRecognition: () => void;
  stopSpeechRecognition: () => void;
  handleGetQuestion: () => void;
  setQuestion: Dispatch<SetStateAction<string>>;
};

const RequestSection = ({
  isValid,
  isLoading,
  handleValidate,
  handleSubmit,
  transcript,
  setTranscript,
  isRecording,
  startSpeechRecognition,
  stopSpeechRecognition,
  handleGetQuestion,
  setQuestion,
}: RequestSectionProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTranscript, setEditedTranscript] = useState(transcript);

  const submitTranscriptAndResetQuestion = () => {
    handleSubmit();
    // console.log('submit');
    setQuestion('');
  };

  const handleGetQuestionAndResetTranscripts = () => {
    handleGetQuestion();
    setEditedTranscript('');
    setTranscript('');
  };

  const handleSave = () => {
    setTranscript(editedTranscript);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTranscript(transcript);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col w-[950px]">
      <div className="flex w-full">
        <img src={user} alt="user" className="w-[50px] mr-4 self-start" />
        <RequestInput
          {...{
            transcript,
            isEditing,
            editedTranscript,
            setEditedTranscript,
          }}
        />
      </div>
      <div className="flex justify-center relative items-center gap-3">
        {!isValid && (
          <PrimaryButton onClickHandler={handleValidate}>
            Start Interview
          </PrimaryButton>
        )}
        {isValid && (
          <>
            <PrimaryButton
              onClickHandler={
                transcript && !isRecording
                  ? submitTranscriptAndResetQuestion
                  : isRecording
                  ? stopSpeechRecognition
                  : startSpeechRecognition
              }
              disabled={isLoading || isEditing}
              className={`${isRecording ? 'animate-fade-in-out' : ''} `}
            >
              {transcript && !isRecording
                ? 'Submit Answer'
                : isRecording
                ? 'Stop Recoding'
                : 'Start Recording Answer'}
            </PrimaryButton>
            <SecondaryButton
              onClickHandler={isEditing ? handleSave : () => setIsEditing(true)}
              disabled={isRecording}
            >
              {isEditing ? 'Save' : 'Edit'}
            </SecondaryButton>
            {isEditing && (
              <SecondaryButton onClickHandler={handleCancel}>
                Cancel
              </SecondaryButton>
            )}
            <SecondaryButton
              onClickHandler={handleGetQuestionAndResetTranscripts}
              disabled={isRecording || isEditing}
              className="absolute right-0"
            >
              Change question
            </SecondaryButton>
          </>
        )}
      </div>
    </div>
  );
};

export default RequestSection;
