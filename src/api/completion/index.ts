import type { FormValues } from '@@types/form';
import instance from '@api';
import { mapSearchParamToValue, generatePrompt } from './completion.utils';

interface CompletionApiProps extends Omit<FormValues, 'editedTranscript'> {
  searchParams: URLSearchParams;
}

const fetchOpenAICompletion = async ({
  searchParams,
  apiKey,
  question,
  transcript,
}: CompletionApiProps) => {
  const { field, experience, lang } = mapSearchParamToValue(searchParams);

  const prompt = generatePrompt(field, experience, lang, question, transcript);
  const options = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  };
  const config = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  };

  const { data } = await instance.post('v1/completions', options, config);

  const response = data.choices[0].text.trim();

  return {
    id: data.id,
    response,
  };
};

export default fetchOpenAICompletion;
