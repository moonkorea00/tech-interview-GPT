import RequestInput from './RequestInput';
import { PrimaryButton, SecondaryButton } from '@components/common/Button';
import user from '@assets/Main/user.svg';
import { useFormSelector } from '@hooks/useFormContext';
import useForm from '@hooks/useForm';
import useSpeechRecognition from '@hooks/useSpeechRecognition';
import useGetQuestion from '@hooks/useGetQuestion';

const RequestSection = () => {
  const { transcript, editedTranscript, isValid, isEditing, isLoading } =
    useFormSelector();
  const {
    handleChange,
    handleValidateForm,
    handleSubmitForm,
    handleEditMode,
    handleSaveEdit,
    handleCancelEdit,
  } = useForm();
  const { isRecording, startSpeechRecognition, stopSpeechRecognition } =
    useSpeechRecognition();
  const { handleGetQuestion } = useGetQuestion(isValid);

  return (
    <div className="w-[950px]">
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
      <div className="flex justify-center items-center gap-3 relative">
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
