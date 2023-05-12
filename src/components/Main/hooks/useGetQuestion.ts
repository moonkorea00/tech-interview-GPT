/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFormDispatch } from '../../../hooks/useFormContext';
import { questions } from '@utils/questions';

const useGetQuestion = (condition: boolean) => {
  const [searchParams] = useSearchParams();

  const dispatch = useFormDispatch();

  const field = searchParams.get('field');
  const questionsArr = questions[field as keyof typeof questions];

  const handleGetQuestion = (arr: string[]) => {
    const randomQuestionIdx = Math.floor(Math.random() * arr.length);
    const randomQuestion = arr[randomQuestionIdx];
    dispatch({ type: 'FORM/GET_QUESTION', payload: randomQuestion });
  };

  useEffect(() => {
    if (!condition || !questionsArr) return;
    handleGetQuestion(questionsArr);
  }, [condition]);

  return {
    handleGetQuestion: () => handleGetQuestion(questionsArr),
  };
};

export default useGetQuestion;