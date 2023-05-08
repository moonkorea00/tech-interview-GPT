import { ChangeEvent } from 'react';
import RequestInput from './RequestInput';
import { PrimaryButton, SecondaryButton } from '@components/common/Button';
import user from '@assets/user.svg';
import { State } from '@@types/form';

type RequestSectionProps = {
  formValues: State;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleValidateForm: () => void;
  handleSubmitForm: () => Promise<void>;
  isRecording: boolean;
  startSpeechRecognition: () => void;
  stopSpeechRecognition: () => void;
  handleGetQuestion: () => void;
  handleEditMode: () => void;
  handleSaveEdit: () => void;
  handleCancelEdit: () => void;
};

const RequestSection = ({
  formValues,
  handleChange,
  handleValidateForm,
  handleSubmitForm,
  isRecording,
  startSpeechRecognition,
  stopSpeechRecognition,
  handleGetQuestion,
  handleEditMode,
  handleSaveEdit,
  handleCancelEdit,
}: RequestSectionProps) => {
  const { transcript, editedTranscript, isValid, isEditing, isLoading } =
    formValues;

  return (
    <div className="flex flex-col w-[950px]">
      <div className="flex w-full">
        <img src={user} alt="user" className="w-[50px] mr-4 self-start" />
        <RequestInput
          {...{
            transcript,
            isEditing,
            editedTranscript,
            handleChange,
          }}
        />
      </div>
      <div className="flex justify-center relative items-center gap-3">
        {isValid ? (
          <>
            <PrimaryButton
              onClickHandler={
                transcript && !isRecording
                  ? handleSubmitForm
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
              onClickHandler={isEditing ? handleSaveEdit : handleEditMode}
              disabled={isRecording}
            >
              {isEditing ? 'Save' : 'Edit'}
            </SecondaryButton>
            {isEditing && (
              <SecondaryButton onClickHandler={handleCancelEdit}>
                Cancel
              </SecondaryButton>
            )}
            <SecondaryButton
              onClickHandler={handleGetQuestion}
              disabled={isRecording || isEditing}
              className="absolute right-0"
            >
              Change question
            </SecondaryButton>
          </>
        ) : (
          <PrimaryButton onClickHandler={handleValidateForm}>
            Start Interview
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};

export default RequestSection;
