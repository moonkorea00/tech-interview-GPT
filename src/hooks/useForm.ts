import { useState, ChangeEvent, MouseEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import getOpenAICompletion from '@api/openAI';
import { formValuesProps } from '@@types/form';

const useForm = (
  initialValues: formValuesProps,
  onValidate: () => { [key: string]: string }
) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [modelResponse, setModelResponse] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormValues(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleValidate = () => {
    const { error } = onValidate();
    setModelResponse(error);
    if (!error) setIsValid(true);
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      handleValidate();
      setLoading(true);
      await getOpenAICompletion(searchParams, formValues);
    } catch (err) {
      // setModelResponse()
    } finally {
      setLoading(false);
    }
  };

  return {
    modelResponse,
    isValid,
    loading,
    formValues,
    handleChange,
    handleValidate,
    handleSubmit,
  };
};

export default useForm;
