import type { ActionButtonProps } from '@@types/form';
import { useRef } from 'react';
import OptionsTooltip from '@components/Main/InterviewOptionsPanel/InterviewOption/OptionLabel/ToolTip';
import useOnClickOutside from '@hooks/useOnClickOutside';

const ActionButton = ({
  onClickHandler,
  variant,
  label,
  tooltipContent,
  setTooltipContent,
  className,
  disabled = false,
}: ActionButtonProps) => {
  const buttonRef = useRef(null);

  const buttonClasses =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-secondary'
      : 'text-black border border-solid border-border-default hover:bg-secondary-hover';

  useOnClickOutside(
    buttonRef,
    () => (setTooltipContent as React.Dispatch<React.SetStateAction<string>>)(''),
    Boolean(tooltipContent)
  );

  return (
    <div className="relative">
      <button
        onClick={onClickHandler}
        className={`relative rounded-xl px-3 py-1.5 text-sm sm:text-xs font-semibold ${buttonClasses} ${
          disabled && 'cursor-not-allowed'
        } ${className}`}
        disabled={disabled}
      >
        {label}
      </button>
      {tooltipContent && <OptionsTooltip tooltipContent={tooltipContent} />}
    </div>
  );
};

export default ActionButton;
