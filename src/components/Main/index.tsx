import InterviewOptions from './Options';
import ResponseSection from './ResponseSection';
import RequestSection from './RequestSection';
import { OPTIONS_DATA } from './Options/constants';
import useForm from '@hooks/useForm';
import useSpeechRecognition from '@hooks/useSpeechRecognition';
import useGetQuestion from '@hooks/useGetQuestion';
import { validateRequestOptions } from '@utils/validateRequestOptions';
import { useSearchParams } from 'react-router-dom';

const Main = () => {
  const [queryParams] = useSearchParams();

  const {
    formValues,
    dispatch,
    handleChange,
    handleValidateForm,
    handleSubmitForm,
    handleEditMode,
    handleSaveEdit,
    handleCancelEdit,
  } = useForm(() => validateRequestOptions(queryParams));
  const { handleGetQuestion } = useGetQuestion(dispatch, formValues.isValid);
  const { isRecording, startSpeechRecognition, stopSpeechRecognition } =
    useSpeechRecognition(dispatch);

  return (
    <main className="flex flex-col items-center gap-12 mb-20">
      <div className="flex">
        {OPTIONS_DATA.map(option => (
          <InterviewOptions
            key={option.id}
            {...{ option, formValues, handleChange }}
          />
        ))}
      </div>
      <div className="flex flex-col gap-20">
        <RequestSection
          {...{
            formValues,
            handleChange,
            handleValidateForm,
            handleSubmitForm,
            isRecording,
            startSpeechRecognition,
            stopSpeechRecognition,
            handleGetQuestion,
            handleEditMode,
            handleSaveEdit,
            handleCancelEdit,
          }}
        />
        <ResponseSection formValues={formValues} />
      </div>
    </main>
  );
};

export default Main;
