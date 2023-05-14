import ActionButton from '@components/common/Button';
import { useFormSelector } from '@hooks/useFormContext';
import useForm from '@hooks/useForm';
import useSpeechRecognition from '../hooks/useSpeechRecognition';
import useGetQuestion from '../hooks/useGetQuestion';

const ActionButtonPanel = () => {
  const { formValues: { transcript }, isValid, isEditing, isLoading, isRetry } = useFormSelector();
  const { handleValidateForm, handleSubmitForm, handleEditMode, handleSaveEdit, handleCancelEdit } = useForm();
  const { isRecording, startSpeechRecognition, stopSpeechRecognition } = useSpeechRecognition();
  const { handleGetQuestion } = useGetQuestion(!isRetry && isValid);

  return (
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
            <ActionButton onClickHandler={handleCancelEdit} variant="secondary">
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
  );
};

export default ActionButtonPanel;
