import { AxiosError } from 'axios';

// interview options
export const optionsErrMap = {
  field: 'Development Field',
  experience: 'Work Experience',
  lang: 'Language',
};

// speech recognition
export const speechRecognitionErrMap = {
  userMedia: {
    NotAllowedError:
      'Please enable microphone access in your browser settings or continue by typing your answer.',
    NotFoundError:
      'Dont have a microphone? Try submitting your answer by clicking "Edit".',
    NotReadableError: `Your audio device currently isn't producing a usable signal and is currently not available. Please check your device or try submitting your answer by clicking "Edit".`,
  },
  unsupported:
    'Speech Recognition is not supported in this browser. Try submitting your answer by clicking "Edit".',
  connection:
    'Dont have a microphone? Try submitting your answer by clicking "Edit".',
};

// axios
type HttpStatus = 401 | 404 | 429 | 500 | 503;

const httpStatusErrMap: Record<HttpStatus, string> = {
  401: `Your API key is not valid. Make sure you've provided a correct API key with enough tokens. If you dont have an API key, generate a new one at https://platform.openai.com/account/api-keys.`,
  404: 'The requested resource could not be found.',
  429: `We're experiencing high traffic or you have exceeded your current quota. Please check your plan and billing details at https://platform.openai.com/account/billing/limits.`,
  500: 'The server had an error while processing your request. Retry submitting your answer after a brief wait.',
  503: 'The server is currently unavailable. Retry submitting your answer after a brief wait.',
};

export const getAxiosError = (err: AxiosError) => {
  const httpStatus = err.response?.status ?? 0;

  if (!err.response) {
    return `Please check your network connection : ${err.message}.`;
  }
  if (httpStatus in httpStatusErrMap) {
    return httpStatusErrMap[httpStatus as HttpStatus];
  } else {
    return `[${err.message}]: Retry submitting your answer after a brief wait.`;
  }
};
