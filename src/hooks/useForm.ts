import { useReducer, ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import getOpenAICompletion from '@api/openAI';
import { initialState, formReducer } from '@reducer/formReducer';

const useForm = (onValidate: VoidFunction) => {
  const [formValues, dispatch] = useReducer(formReducer, initialState);
  const { transcript, editedTranscript } = formValues;
  const [searchParams] = useSearchParams();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FORM', payload: { name, value } });
  };

  const handleValidateForm = () => {
    try {
      onValidate();
      dispatch({ type: 'VALIDATION_VALID' });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: 'VALIDATION_ERROR', payload: err.message });
      }
    }
  };

  const handleSubmitForm = async () => {
    try {
      handleValidateForm();
      dispatch({ type: 'FETCH_INIT' });
      // TODO : await getOpenAICompletion(searchParams, formValues);
      // TODO :dispatch({ type: 'FETCH_SUCCESS', payload: res });
    } catch (err) {
      // TODO : handle axios error type
      // TODO : dispatch({ type: 'FETCH_ERROR', payload: err.message });
    } finally {
      dispatch({ type: 'FETCH_SETTLED' });
    }
  };

  const handleEditMode = () => {
    dispatch({ type: 'START_EDIT', payload: transcript });
  };

  const handleSaveEdit = () => {
    dispatch({ type: 'SAVE_EDIT', payload: editedTranscript });
  };

  const handleCancelEdit = () => {
    dispatch({ type: 'CANCEL_EDIT', payload: transcript });
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
