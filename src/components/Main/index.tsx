import { useSearchParams } from 'react-router-dom';
import InterviewOptions from './Options';
import ResponseSection from './ResponseSection';
import RequestSection from './RequestSection';
import { OPTIONS_DATA } from './Options/constants';
import useForm from '@hooks/useForm';
import { validateRequestOptions } from '@utils/validateRequestOptions';

const Main = () => {
  const [queryOptions] = useSearchParams();
  const { modelResponse, isValid, loading, formValues, handleChange, handleValidate, handleSubmit } =
    useForm({ apiKey: '' }, () =>
      validateRequestOptions(queryOptions, formValues)
    );

  return (
    <main className="flex flex-col mt-20">
      <div className="flex">
        {OPTIONS_DATA.map(option => (
          <InterviewOptions
            key={option.id}
            optionProps={option}
            formValues={formValues}
            handleChange={handleChange}
          />
        ))}
      </div>
      <div className="flex flex-col gap-7 mt-8">
        <RequestSection isValid={isValid} handleValidate={handleValidate} />
        <ResponseSection modelResponse={modelResponse} />
      </div>
    </main>
  );
};

export default Main;
