import { ChangeEvent } from 'react';

type RequestInputProps = {
  transcript: string;
  isEditing: boolean;
  editedTranscript: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const RequestInput = ({
  isEditing,
  transcript,
  editedTranscript,
  handleChange,
}: RequestInputProps) => {
  return (
    <>
      {isEditing ? (
        <textarea
          name="editedTranscript"
          value={editedTranscript}
          onChange={handleChange}
          className="flex flex-col justify-center w-full min-h-[200px] p-4 mb-8 border border-black/10 leading-6 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary shadow-sectionInput"
          autoFocus
        />
      ) : (
        <section className="flex flex-col justify-center w-full min-h-[50px] p-4 mb-8 border border-black/10 leading-6 rounded-md shadow-sectionInput">
          <p>{transcript}</p>
        </section>
      )}
    </>
  );
};

export default RequestInput;
