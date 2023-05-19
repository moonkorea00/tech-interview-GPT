import DialogueInput from '@components/common/DialogueInput';
import ActionButtonPanel from './ActionButtonPanel';
import user from '@assets/Main/user.svg';
import { useFormSelector } from '@store/formContext';
import useForm from '@hooks/useForm';

const UserRequestPanel = () => {
  const { formValues: { transcript, editedTranscript }, isEditing } = useFormSelector();
  const { handleChange } = useForm();

  return (
    <section className="w-[950px]">
      <DialogueInput
        src={user}
        transcript={transcript}
        editedTranscript={editedTranscript}
        isEditing={isEditing}
        handleChange={handleChange}   
      />
      <ActionButtonPanel />
    </section>
  );
};

export default UserRequestPanel;
