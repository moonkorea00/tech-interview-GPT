import { MouseEvent } from "react";

type RequestSectionProps = {
  isValid: boolean;
  handleValidate: () => void;
  handleSubmit: (e: MouseEvent<HTMLButtonElement>) => Promise<void>
  transcript: string;
  isRecording: boolean;
  startSpeechRecognition: () => void;
  stopSpeechRecognition: () => void;
};

const RequestSection = ({
  isValid,
  handleValidate,
  handleSubmit,
  transcript,
  isRecording,
  startSpeechRecognition,
  stopSpeechRecognition,
}: RequestSectionProps) => {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col justify-center h-[50px] mh-12 py-3 pl-4 mb-5 border border-black/10 leading-6 dark:border-gray-900/50 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)]">
        <p>{transcript}</p>
      </section>
      <div className="flex justify-center gap-6">
        {!isValid && (
          <button
            onClick={handleValidate}
            className="rounded-xl bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500 "
          >
            Start Interview
          </button>
        )}
        {isValid && (
          <>
            <button
              onClick={
                transcript && !isRecording
                  ? () => console.log('submit') // handleSubmit
                  : isRecording
                  ? stopSpeechRecognition
                  : startSpeechRecognition
              }
              className="rounded-xl bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500 "
            >
              {transcript && !isRecording
                ? 'Submit Answer'
                : isRecording
                ? 'Stop Recoding'
                : 'Start Recording Answer'}
            </button>
            <button
              // onClick={stopSpeechRecognition}
              className="rounded-xl px-3 py-1.5 text-sm font-semibold text-black hover:bg-indigo-500 "
            >
              Change question
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default RequestSection;
