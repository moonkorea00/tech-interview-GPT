import type { ActionButtonProps } from '@@types/form';
import useForm from '@hooks/useForm';
import { useFormSelector } from '@store/formContext';
import useSpeechRecognition from './useSpeechRecognition';
import useGetQuestion from './useGetQuestion';

type FormButtonConfig = ActionButtonProps & {
  shouldRender: boolean;
};

const useFormButtonConfig = () => {
  const { formValues: { transcript }, isValid, isEditing, isLoading, isRetry } = useFormSelector();
  const { handleValidateForm, handleSubmitForm, handleEditMode, handleSaveEdit, handleCancelEdit } = useForm();
  const { isRecording, startSpeechRecognition, stopSpeechRecognition } = useSpeechRecognition();
  const { handleGetQuestion } = useGetQuestion(!isRetry && isValid);

  const isFormReadyToSubmit = Boolean(transcript) && !isRecording;

  const startInterviewButton = {
    onClickHandler: handleValidateForm,
    variant: 'primary',
    label: 'Start Interview',
    shouldRender: !isValid,
  };

  const submitButton = {
    onClickHandler: handleSubmitForm,
    variant: 'primary',
    label: 'Submit Answer',
    disabled: isLoading || isEditing || !isFormReadyToSubmit,
    shouldRender: isValid && isFormReadyToSubmit,
  };

  const recordButton = {
    onClickHandler: isRecording ? stopSpeechRecognition : startSpeechRecognition,
    variant: 'primary',
    label: isRecording ? 'Stop Recording' : 'Start Recording Answer',
    className: isRecording ? 'animate-fade-in-out' : '',
    disabled: isEditing || isFormReadyToSubmit,
    shouldRender: isValid && !isFormReadyToSubmit,
  };

  const editButton = {
    onClickHandler: isEditing ? handleSaveEdit : handleEditMode,
    variant: 'secondary',
    label: isEditing ? 'Save' : 'Edit',
    disabled: isRecording || isLoading,
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
    disabled: isRecording || isEditing || isLoading,
    shouldRender: isValid,
  };

  const formButtonsConfig: FormButtonConfig[] = [
    startInterviewButton,
    submitButton,
    recordButton,
    editButton,
    cancelEditButton,
    changeQuestionButton,
  ];

  return { formButtonsConfig };
};

export default useFormButtonConfig;
