import { useEffect, ChangeEvent } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useFormSelector, useFormDispatch } from './useFormContext';
import { validateRequestOptions as onValidate } from '@utils/validateRequestOptions';
import fetchOpenAiCompletion from '@api/openAI';

const useForm = () => {
  const { search } = useLocation();
  const [searchParams] = useSearchParams();

  const formValues = useFormSelector();
  const dispatch = useFormDispatch();

  const { apiKey, transcript, editedTranscript } = formValues;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({ type: 'FORM/UPDATE_FIELD', payload: { name, value } });
  };

  const handleValidateForm = () => {
    try {
      onValidate(searchParams);
      dispatch({ type: 'FORM/VALIDATION_SUCCESS' });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: 'FORM/VALIDATION_FAIL', payload: err.message });
      }
    }
  };

  const handleSubmitForm = async () => {
    try {
      if (!apiKey) throw new AxiosError('Please provide your OpenAI API Key.');
      handleValidateForm();
      dispatch({ type: 'API/FETCH_START' });
      const res = await fetchOpenAiCompletion(searchParams, formValues);
      dispatch({ type: 'API/FETCH_SUCCESS', payload: res });
    } catch (err) {
      if (err instanceof AxiosError) {
        dispatch({ type: 'API/FETCH_FAIL', payload: err.message });
      }
    } finally {
      dispatch({ type: 'API/FETCH_COMPLETE' });
    }
  };

  const handleEditMode = () => {
    dispatch({ type: 'FORM/EDIT_START', payload: transcript });
  };

  const handleSaveEdit = () => {
    dispatch({ type: 'FORM/EDIT_SAVE', payload: editedTranscript });
  };

  const handleCancelEdit = () => {
    dispatch({ type: 'FORM/EDIT_CANCEL', payload: transcript });
  };

  const handleRetryQuestion = (question: string) => {
    dispatch({ type: 'FORM/RETRY_QUESTION', payload: question });
  };

  useEffect(() => {
    if (!search) dispatch({ type: 'FORM/RESET' });
  }, [search]);

  return {
    formValues,
    handleChange,
    handleValidateForm,
    handleSubmitForm,
    handleEditMode,
    handleSaveEdit,
    handleCancelEdit,
    handleRetryQuestion,
  };
};

export default useForm;
