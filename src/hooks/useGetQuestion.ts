/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, Dispatch } from 'react';
import { useSearchParams } from 'react-router-dom';
import { questions } from '@utils/questions';
import { Action } from '@@types/form';

const useGetQuestion = (dispatch: Dispatch<Action>, condition: boolean) => {
  const [searchParams] = useSearchParams();

  const field = searchParams.get('field');
  const questionsArr = questions[field as keyof typeof questions];

  const handleGetQuestion = (arr: string[]) => {
    const randomQuestionIdx = Math.floor(Math.random() * arr.length);
    const randomQuestion = arr[randomQuestionIdx];
    dispatch({ type: 'FORM/GET_QUESTION', payload: randomQuestion });
  };

  useEffect(() => {
    if (!condition) return;
    handleGetQuestion(questionsArr);
  }, [condition]);

  return {
    handleGetQuestion: () => handleGetQuestion(questionsArr),
  };
};

export default useGetQuestion;
