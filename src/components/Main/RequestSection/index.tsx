import DialogueInput from '@components/common/DialogueInput';
import ActionButton from '@components/common/Button';
import src from '@assets/Main/user.svg';
import { useFormSelector } from '@hooks/useFormContext';
import useForm from '@hooks/useForm';
import useSpeechRecognition from '../hooks/useSpeechRecognition';
import useGetQuestion from '@components/Main/hooks/useGetQuestion';

const RequestSection = () => {
  const {
    formValues: { transcript, editedTranscript },
    isValid,
    isEditing,
    isLoading,
    isRetry,
  } = useFormSelector();
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
  const { handleGetQuestion } = useGetQuestion(!isRetry && isValid);

  return (
    <div className="w-[950px]">
      <DialogueInput
        {...{
          src,
          transcript,
          isEditing,
          editedTranscript,
          handleChange,
        }}
      />
      <div className="flex justify-center items-center gap-3 relative">
        {isValid ? (
          <>
            <ActionButton
              onClickHandler={
                transcript && !isRecording
                  ? handleSubmitForm
                  : isRecording
                  ? stopSpeechRecognition
                  : startSpeechRecognition
              }
              variant="primary"
              disabled={isLoading || isEditing}
              className={`${isRecording ? 'animate-fade-in-out' : ''} `}
            >
              {transcript && !isRecording
                ? 'Submit Answer'
                : isRecording
                ? 'Stop Recoding'
                : 'Start Recording Answer'}
            </ActionButton>
            <ActionButton
              onClickHandler={isEditing ? handleSaveEdit : handleEditMode}
              variant="secondary"
              disabled={isRecording}
            >
              {isEditing ? 'Save' : 'Edit'}
            </ActionButton>
            {isEditing && (
              <ActionButton
                onClickHandler={handleCancelEdit}
                variant="secondary"
              >
                Cancel
              </ActionButton>
            )}
            <ActionButton
              onClickHandler={handleGetQuestion}
              variant="secondary"
              disabled={isRecording || isEditing}
              className="absolute right-0"
            >
              Change question
            </ActionButton>
          </>
        ) : (
          <ActionButton onClickHandler={handleValidateForm} variant="primary">
            Start Interview
          </ActionButton>
        )}
      </div>
    </div>
  );
};

export default RequestSection;
