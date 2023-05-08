import { options } from '@components/Main/Options/constants';
import { optionsErrMap } from './error';

export const validateRequestOptions = (searchParams: URLSearchParams) => {
  const errors: string[] = [];

  for (const [key, value] of searchParams) {
    if (!options[key][value]) {
      errors.push(optionsErrMap[key as keyof typeof optionsErrMap]);
    }
  }

  if (errors.length > 0) {
    const errorMessage = `Before we start, fill out the following options : ${errors.join(
      ', '
    )}`;
    throw new Error(errorMessage);
  }
};
