import useForm from '@hooks/useForm';
import { useFormSelector } from '@hooks/useFormContext';
import useSpeechRecognition from './useSpeechRecognition';
import useGetQuestion from './useGetQuestion';
import { ActionButtonProps } from '@@types/form';

type FormButtonConfig = ActionButtonProps & {
  shouldRender: boolean;
};

const useFormButtonConfig = () => {
  const { formValues: { transcript }, isValid, isEditing, isLoading, isRetry } = useFormSelector();
  const { handleValidateForm, handleSubmitForm, handleEditMode, handleSaveEdit, handleCancelEdit } = useForm();
  const { isRecording, startSpeechRecognition, stopSpeechRecognition } = useSpeechRecognition();
  const { handleGetQuestion } = useGetQuestion(!isRetry && isValid);

  const isFormReadyToSubmit = transcript && !isRecording;

  const startInterviewButton = {
    onClickHandler: handleValidateForm,
    variant: 'primary',
    label: 'Start Interview',
    shouldRender: !isValid,
  };

  const startAndRecordButton = {
    onClickHandler: isFormReadyToSubmit
      ? handleSubmitForm
      : isRecording
      ? stopSpeechRecognition
      : startSpeechRecognition,
    variant: 'primary',
    label: isFormReadyToSubmit
      ? 'Submit Answer'
      : isRecording
      ? 'Stop Recoding'
      : 'Start Recording Answer',
    className: isRecording ? 'animate-fade-in-out' : '',
    disabled: isLoading || isEditing,
    shouldRender: isValid,
  };

  const editButton = {
    onClickHandler: isEditing ? handleSaveEdit : handleEditMode,
    variant: 'secondary',
    label: isEditing ? 'Save' : 'Edit',
    disabled: isRecording,
    shouldRender: isValid,
  };

  const cancelEditButton = {
    onClickHandler: handleCancelEdit,
    variant: 'secondary',
    label: 'Cancel',
    shouldRender: isValid && isEditing,
  };

  const changeQuestionButton = {
    onClickHandler: handleGetQuestion,
    variant: 'secondary',
    label: 'Change question',
    className: 'absolute right-0',
    disabled: isRecording || isEditing,
    shouldRender: isValid,
  };

  const formButtonsConfig: FormButtonConfig[] = [
    startInterviewButton,
    startAndRecordButton,
    editButton,
    cancelEditButton,
    changeQuestionButton,
  ];

  return { formButtonsConfig };
};

export default useFormButtonConfig;
