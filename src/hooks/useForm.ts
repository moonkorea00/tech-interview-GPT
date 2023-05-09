import { useReducer, ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { initialState, formReducer } from '@reducer/formReducer';
import fetchOpenAiCompletion from '@api/openAI';

const useForm = (onValidate: VoidFunction) => {
  const [formValues, dispatch] = useReducer(formReducer, initialState);
  const [searchParams] = useSearchParams();

  const { apiKey, transcript, editedTranscript } = formValues;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({ type: 'FORM/UPDATE_FIELD', payload: { name, value } });
  };

  const handleValidateForm = () => {
    try {
      onValidate();
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
      console.log(res);
      dispatch({ type: 'API/FETCH_SUCCESS', payload: res });
    } catch (err) {
      console.log(err);
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

  return {
    formValues,
    dispatch,
    handleChange,
    handleValidateForm,
    handleSubmitForm,
    handleEditMode,
    handleSaveEdit,
    handleCancelEdit,
  };
};

export default useForm;
