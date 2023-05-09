import useTypingEffect from '@hooks/useTypingEffect';
import ChatGPT from '@assets/ChatGPT.svg';
import { State } from '@@types/form';

type ResponseSectionProps = {
  formValues: State;
};

const ResponseSection = ({ formValues }: ResponseSectionProps) => {
  const { modelResponse, isLoading } = formValues;
  const animatedString = useTypingEffect(modelResponse);

  return (
    <div className="flex w-[950px]">
      <img src={ChatGPT} alt="ChatGPT" className="w-[45px] mr-4 self-start" />
      <section className="flex flex-col justify-center w-full min-h-[50px] p-4 border border-border-default leading-6 rounded-md shadow-sectionInput">
        {isLoading ? 'loading' : animatedString}
      </section>
    </div>
  );
};

export default ResponseSection;
