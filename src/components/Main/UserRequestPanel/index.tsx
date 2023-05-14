import DialogueInput from '@components/common/DialogueInput';
import ActionButtonPanel from '../ActionButtonPanel';
import src from '@assets/Main/user.svg';
import { useFormSelector } from '@hooks/useFormContext';
import useForm from '@hooks/useForm';

const UserRequestPanel = () => {
  const {
    formValues: { transcript, editedTranscript },
    isEditing,
  } = useFormSelector();
  const { handleChange } = useForm();

  return (
    <div className="w-[950px]">
      <DialogueInput
        {...{
          src,
          transcript,
          isEditing,
          editedTranscript,
          handleChange,
        }}
      />
      <ActionButtonPanel />
    </div>
  );
};

export default UserRequestPanel;
