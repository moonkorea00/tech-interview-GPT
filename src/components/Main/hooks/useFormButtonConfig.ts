import useForm from '@hooks/useForm';
import { useFormSelector } from '@hooks/useFormContext';
import useSpeechRecognition from './useSpeechRecognition';
import useGetQuestion from './useGetQuestion';

const useFormButtonConfig = () => {
  const { formValues: { transcript }, isValid, isEditing, isLoading, isRetry } = useFormSelector();
  const { handleValidateForm, handleSubmitForm, handleEditMode, handleSaveEdit, handleCancelEdit } = useForm();
  const { isRecording, startSpeechRecognition, stopSpeechRecognition } = useSpeechRecognition();
  const { handleGetQuestion } = useGetQuestion(!isRetry && isValid);

  const isFormReadyToSubmit = transcript && !isRecording

  const startInterviewButton = {
    onClickHandler: handleValidateForm,
    variant: 'primary',
    label: 'Start Interview',
    disabled: false,
  };

  const startAndRecordButton = {
    onClickHandler:
      isFormReadyToSubmit
        ? handleSubmitForm
        : isRecording
        ? stopSpeechRecognition
        : startSpeechRecognition,
    variant: 'primary',
    className: isRecording ? 'animate-fade-in-out' : '',
    label:
      isFormReadyToSubmit
        ? 'Submit Answer'
        : isRecording
        ? 'Stop Recoding'
        : 'Start Recording Answer',
    disabled: isLoading || isEditing,
  };

  const editButton = {
    onClickHandler: isEditing ? handleSaveEdit : handleEditMode,
    variant: 'secondary',
    label: isEditing ? 'Save' : 'Edit',
    disabled: isRecording,
  };

  const cancelEditButton = {
    onClickHandler: handleCancelEdit,
    variant: 'secondary',
    label: 'Cancel',
    disabled: false,
  };

  const changeQuestionButton = {
    onClickHandler: handleGetQuestion,
    variant: 'secondary',
    label: 'Change question',
    disabled: isRecording || isEditing,
    className: 'absolute right-0',
  };

  return {
    startInterviewButton,
    startAndRecordButton,
    editButton,
    cancelEditButton,
    changeQuestionButton,
    isEditing,
    isValid,
  };
};

export default useFormButtonConfig;
