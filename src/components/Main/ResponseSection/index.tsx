import ChatGPT from '@assets/ChatGPT.svg';

type ResponseSectionProps = {
  modelResponse: string;
  isValid: boolean;
  question: string;
  isLoading: boolean;
};

const ResponseSection = ({
  modelResponse,
  isValid,
  question,
  isLoading,
}: ResponseSectionProps) => {
  return (
    <div className="flex w-[950px]">
      <img src={ChatGPT} alt="ChatGPT" className="w-[50px] mr-4 self-start"/>
      <section className="flex flex-col justify-center w-full min-h-[50px] p-4 border border-border-default leading-6 rounded-md shadow-sectionInput">
        {isLoading
          ? 'loading'
          : isValid
          ? question || modelResponse
          : modelResponse}
      </section>
    </div>
  );
};

export default ResponseSection;
