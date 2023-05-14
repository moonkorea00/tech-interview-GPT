import ActionButton from '@components/common/Button';
import useFormButtonConfig from '../hooks/useFormButtonConfig';

const ActionButtonPanel = () => {
  const { formButtonsConfig } = useFormButtonConfig();

  return (
    <div className="flex justify-center items-center gap-3 relative">
      {formButtonsConfig.map(
        button =>
          button.shouldRender && <ActionButton key={button.label} {...button} />
      )}
    </div>
  );
};

export default ActionButtonPanel;
