import { options } from '@components/Main/Options/constants';
import { optionsErrMap } from './error';

const validateSearchParams = (searchParams: URLSearchParams) => {
  const errors: string[] = [];
  const queryKeys = Object.keys(options);

  queryKeys.forEach(key => {
    const value = searchParams.get(key);

    if (!value || !Object.keys(options[key]).includes(value)) {
      errors.push(optionsErrMap[key as keyof typeof optionsErrMap]);
    }
  });

  return errors;
};

const validateState = (value: string) => {
  const ERR_KEY = 'api';
  const errors: string[] = [];
  if (!value) errors.push(optionsErrMap[ERR_KEY]);

  return errors;
};

export const validateRequestOptions = (
  searchParams: URLSearchParams,
  formValues: { [key: string]: string }
) => {
  const { apiKey } = formValues;

  const searchParamsErrors = validateSearchParams(searchParams);
  const stateErrors = validateState(apiKey);

  const errors = [...searchParamsErrors, ...stateErrors];

  if (errors.length > 0) {
    const errorMessage = `Before we start, fill out the following options : ${errors.join(', ')}`;
    throw new Error(errorMessage);
  }
};
