import Flicker from '@assets/Main/Flicker.svg';
import ChatGPT from '@assets/Main/ChatGPT.svg';
import useTypingEffect from '../hooks/useTypingEffect';
import { useFormSelector } from '@store/formContext';

const ModelResponsePanel = () => {
  const { modelResponse, isLoading } = useFormSelector();
  const { text: modelMessage, isAnimating } = useTypingEffect(modelResponse);

  return (
    <section className="flex w-[950px]">
      <img src={ChatGPT} alt="ChatGPT" className="w-[45px] mr-4 self-start" />
      <div className="flex flex-col justify-center w-full min-h-[50px] p-4 border border-border-default leading-6 rounded-md shadow-sectionInput">
        <span className="whitespace-pre-line">
          {isLoading ? 'loading' : modelMessage}
          {(isAnimating || isLoading) && (
            <img
              src={Flicker}
              alt="flicker"
              className="inline-block w-[10px] animate-flicker"
            />
          )}
        </span>
      </div>
    </section>
  );
};

export default ModelResponsePanel;
