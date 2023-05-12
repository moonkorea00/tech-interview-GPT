import { ChangeEvent } from 'react';

type RequestInputProps = {
  src: string;
  transcript: string;
  isEditing?: boolean;
  editedTranscript?: string;
  handleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const DialogueInput = ({
  src,
  isEditing,
  transcript,
  editedTranscript,
  handleChange,
}: RequestInputProps) => {
  return (
    <section className="flex w-full">
      <img src={src} alt="user" className="w-[50px] mr-4 self-start" />
      {isEditing ? (
        <textarea
          name="editedTranscript"
          value={editedTranscript}
          onChange={handleChange}
          className="flex flex-col justify-center w-full min-h-[200px] p-4 mb-8 border border-black/10 leading-6 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary shadow-sectionInput"
          autoFocus
        />
      ) : (
        <div className="flex flex-col justify-center w-full min-h-[50px] p-4 mb-8 border border-black/10 leading-6 rounded-md whitespace-pre-line shadow-sectionInput">
          <p>{transcript}</p>
        </div>
      )}
    </section>
  );
};

export default DialogueInput;
