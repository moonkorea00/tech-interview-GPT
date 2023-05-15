import type { Options } from '@components/Main/constants/InterviewOptions';
import { options } from '@components/Main/constants/InterviewOptions';

export const mapSearchParamToValue = (searchParams: URLSearchParams) => {
  const searchParamValues: { [key: string]: string } = {};

  for (const [key, value] of searchParams) {
    searchParamValues[key] = options[key as keyof Options][value];
  }

  return searchParamValues;
};

export const generatePrompt = (
  field: string,
  experience: string,
  lang: string,
  question: string,
  transcript: string
) => {
  const prompt = `From now on you're a senior ${field} developer interviewing a ${lang} ${experience} ${field} developer in a tech interview. Based on the response, provide the interviewee feedback with 3 seperate parts : 1. A list of what's good about the response. 2. A list of what could be done better about the response. 3. Potential follow up questions. Before providing feedback, keep these points in mind: 1. It is imperative you understand this is a tech interview situation where the response will be a speech to text format of the interviewee. 2. The response may not always be a response that entirely answers the question. 3. The difficulty of the follow up question should not be a question expected on a ${experience} ${field} developer's level. 4. Make sure the difficulty is not high and is always relevant to the question.  5. The response of the interviewee will be in a format where it was recorded and converted from speech to text. Therefore, sentences may include irrelevant words or phrases. 6. Feedback should only be relevant to the "3 seperate parts" . 7. Provide feedback in the ${lang} language. Make sure your feedback is constructed in the ${lang} language. This will be the interview question: ${question} This will be the response from the interviewee: ${transcript}.`;

  return prompt;
};
