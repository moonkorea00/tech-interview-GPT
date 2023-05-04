/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { questions } from '@utils/questions';

const useGetQuestion = () => {
  const [question, setQuestion] = useState('');
  const [searchParams] = useSearchParams();

  const field = searchParams.get('field');
  const questionsArr = questions[field as keyof typeof questions];

  const handleGetQuestion = (arr: string[]) => {
    const randomQuestionIdx = Math.floor(Math.random() * arr.length);
    const randomQuestion = arr[randomQuestionIdx];
    setQuestion(randomQuestion);
  };

  useEffect(() => handleGetQuestion(questionsArr), []);

  return {
    question,
    setQuestion,
    handleGetQuestion: () => handleGetQuestion(questionsArr),
  };
};

export default useGetQuestion;
