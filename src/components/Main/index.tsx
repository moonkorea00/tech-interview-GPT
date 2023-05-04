import { useSearchParams } from 'react-router-dom';
import InterviewOptions from './Options';
import ResponseSection from './ResponseSection';
import RequestSection from './RequestSection';
import { OPTIONS_DATA } from './Options/constants';
import useForm from '@hooks/useForm';
import useSpeechRecognition from '@hooks/useSpeechRecognition';
import useGetQuestion from '@hooks/useGetQuestion';
import { validateRequestOptions } from '@utils/validateRequestOptions';

const Main = () => {
  const [queryOptions] = useSearchParams();

  const { question, setQuestion, handleGetQuestion } = useGetQuestion();
  const {
    transcript,
    setTranscript,
    isRecording,
    startSpeechRecognition,
    stopSpeechRecognition,
  } = useSpeechRecognition();
  const {
    modelResponse,
    setModelResponse,
    isValid,
    isLoading,
    formValues,
    handleChange,
    handleValidate,
    handleSubmit,
  } = useForm({ apiKey: '', transcript, question }, () =>
    validateRequestOptions(queryOptions, formValues)
  );

  return (
    <main className="flex flex-col gap-10 mb-28">
      <div className="flex">
        {OPTIONS_DATA.map(option => (
          <InterviewOptions
            key={option.id}
            {...{ option, formValues, handleChange }}
          />
        ))}
      </div>
      <div className="flex flex-col gap-14 mt-6">
        <RequestSection
          {...{
            isValid,
            isLoading,
            handleValidate,
            handleSubmit,
            transcript,
            setTranscript,
            isRecording,
            startSpeechRecognition,
            stopSpeechRecognition,
            handleGetQuestion,
            setQuestion,
          }}
        />
        <ResponseSection {...{ modelResponse, isValid, question, isLoading }} />
      </div>
    </main>
  );
};

export default Main;
