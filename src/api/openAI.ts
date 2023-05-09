import instance from '@api';
import { mapSearchParamToValue, generatePrompt } from '@utils/api';
import { formValuesProps } from '@@types/form';

const fetchOpenAICompletion = async (
  searchParams: URLSearchParams,
  formValues: formValuesProps
) => {
  const { apiKey, transcript, question } = formValues;
  const { field, experience, lang } = mapSearchParamToValue(searchParams);

  const prompt = generatePrompt(field, experience, lang, question, transcript);
  const options = {
    model: 'text-davinci-003',
    prompt,
    temperature: 0.7,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };
  const config = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  };

  const { data } = await instance.post('v1/completions', options, config);

  return data.choices[0].text.trim();
};

export default fetchOpenAICompletion;
