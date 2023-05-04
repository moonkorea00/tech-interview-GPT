import { useState, ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import getOpenAICompletion from '@api/openAI';
import { formValuesProps } from '@@types/form';

const useForm = (initialValues: formValuesProps, onValidate: () => void) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [modelResponse, setModelResponse] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormValues(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleValidate = () => {
    try {
      onValidate();
      setIsValid(true);
    } catch (err) {
      if (err instanceof Error) {
        setModelResponse(err.message);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      handleValidate();
      setIsLoading(true);
      // await getOpenAICompletion(searchParams, formValues);
    } catch (err) {
      // setModelResponse()
    } finally {
      setIsLoading(false);
    }
  };

  return {
    modelResponse,
    setModelResponse,
    isValid,
    isLoading,
    formValues,
    handleChange,
    handleValidate,
    handleSubmit,
  };
};

export default useForm;
