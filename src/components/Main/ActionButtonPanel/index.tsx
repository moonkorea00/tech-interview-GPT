import ActionButton from '@components/common/Button';
import useFormButtonConfig from '../hooks/useFormButtonConfig';

const ActionButtonPanel = () => {
  const {
    startInterviewButton,
    startAndRecordButton,
    editButton,
    cancelEditButton,
    changeQuestionButton,
    isEditing,
    isValid,
  } = useFormButtonConfig();

  return (
    <div className="flex justify-center items-center gap-3 relative">
      {isValid ? (
        <>
          <ActionButton {...startAndRecordButton} />
          <ActionButton {...editButton} />
          {isEditing && <ActionButton {...cancelEditButton} />}
          <ActionButton {...changeQuestionButton} />
        </>
      ) : (
        <ActionButton {...startInterviewButton} />
      )}
    </div>
  );
};

export default ActionButtonPanel;
