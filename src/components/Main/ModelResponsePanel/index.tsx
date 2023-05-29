import { useRef } from 'react';
import Loader from '@components/common/Loader';
import { loaderElements } from '@components/common/Loader/constants';
import Flicker from '@assets/Main/flicker.svg';
import ChatGPT from '@assets/Main/ChatGPT.svg';
import { useFormSelector } from '@store/formContext';
import useIncrementTimeout from '../hooks/useIncrementTimeout';
import useTypingEffect from '../hooks/useTypingEffect';
import useScrollToRef from '../hooks/useScrollToRef';

const ModelResponsePanel = () => {
  const responsePanelRef = useRef(null);

  const { modelResponse, isLoading } = useFormSelector();
  const { text: modelMessage, isAnimating } = useTypingEffect(modelResponse);
  const { count } = useIncrementTimeout(isLoading, loaderElements.length);

  useScrollToRef(responsePanelRef, isLoading || modelMessage.length, count);

  return (
    <section className="flex w-[950px] xl:w-[730px] lg:w-[100%] lg:px-[40px] md:px-[20px] sm:px-[10px]">
      <img
        src={ChatGPT}
        alt="ChatGPT"
        className="w-[45px] md:w-[40px] sm:w-[35px] mr-4 md:mr-2 self-start"
      />
      <div className="flex flex-col justify-center w-full min-h-[50px] p-4 sm:p-2 border border-border-default leading-6 rounded-md shadow-sectionInput">
        <span className="whitespace-pre-line sm:text-sm">
          {isLoading ? <Loader count={count} /> : modelMessage}
          {isAnimating && (
            <img
              src={Flicker}
              alt="flicker"
              className="inline-block w-[10px] animate-flicker"
            />
          )}
        </span>
      </div>
      <div ref={responsePanelRef} />
    </section>
  );
};

export default ModelResponsePanel;
