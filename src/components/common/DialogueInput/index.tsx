import type { ChangeEvent } from 'react';

type DialogueInputProps = {
  src: string;
  transcript: string;
  editedTranscript?: string;
  isEditing?: boolean;
  handleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const DialogueInput = ({
  src,
  transcript,
  editedTranscript,
  isEditing,
  handleChange,
}: DialogueInputProps) => {
  return (
    <section className="flex w-full">
      <img src={src} alt="user" className="w-[50px] md:w-[40px] mr-4 md:mr-2 sm:mr-1 self-start" />
      {isEditing ? (
        <textarea
          name="editedTranscript"
          value={editedTranscript}
          onChange={handleChange}
          className="flex flex-col justify-center w-full min-h-[200px] p-4 sm:p-2 mb-8 sm:text-sm border border-black/10 leading-6 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary shadow-sectionInput"
          autoFocus
        />
      ) : (
        <div className="flex flex-col justify-center w-full min-h-[50px] p-4 sm:p-2 mb-8 sm:text-sm border border-black/10 leading-6 rounded-md whitespace-pre-line shadow-sectionInput">
          <p>{transcript}</p>
        </div>
      )}
    </section>
  );
};

export default DialogueInput;
