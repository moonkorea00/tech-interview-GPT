import DialogueInput from '@components/common/DialogueInput';
import ActionButtonPanel from './ActionButtonPanel';
import user from '@assets/Main/user.svg';
import { useFormSelector } from '@store/formContext';
import useForm from '@hooks/useForm';

const UserRequestPanel = () => {
  const { formValues: { transcript, editedTranscript }, isEditing } = useFormSelector();
  const { handleChange } = useForm();

  return (
    <section className="flex flex-col items-center w-[950px] xl:w-[730px] lg:w-[100%] lg:px-[40px] md:px-[20px] sm:px-[10px]">
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
