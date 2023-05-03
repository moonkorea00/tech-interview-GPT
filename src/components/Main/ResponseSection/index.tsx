import ChatGPT from '@assets/ChatGPT.svg';

type ResponseSectionProps = {
  modelResponse: string;
};

const ResponseSection = ({ modelResponse }: ResponseSectionProps) => {
  return (
    <div className="flex">
      <img src={ChatGPT} alt="ChatGPT" className="w-[50px] mr-4" />
      <section className="flex flex-col justify-center w-full px-3 pl-4 border border-black/10  dark:border-gray-900/50  rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)]">
        <p>{modelResponse}</p>
      </section>
    </div>
  );
};

export default ResponseSection;
