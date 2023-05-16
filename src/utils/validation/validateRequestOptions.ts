import { options } from '@components/Main/constants/InterviewOptions';
import { optionsErrMap } from '../error/error';

export const validateRequestOptions = (searchParams: URLSearchParams) => {
  const errors: string[] = [];

  Object.keys(options).forEach(key => {
    const value = searchParams.get(key);

    if (!value || !Object.keys(options[key as keyof typeof options]).includes(value)) {
      errors.push(optionsErrMap[key as keyof typeof optionsErrMap]);
    }
  });
  
  if (errors.length > 0) {
    const errorMessage = `Before we start, fill out the following options : ${errors.join(
      ', '
    )}`;
    throw new Error(errorMessage);
  }
};
