import { MouseEventHandler } from 'react';

type ActionButtonProps = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  variant: string;
  className?: string;
  disabled?: boolean;
  label: string;
};

const ActionButton = ({
  onClickHandler,
  variant,
  className,
  disabled = false,
  label,
}: ActionButtonProps) => {
  const buttonClasses =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-secondary'
      : 'text-black border border-solid border-border-default hover:bg-secondary-hover';

  return (
    <button
      onClick={onClickHandler}
      disabled={disabled}
      className={`rounded-xl px-3 py-1.5 text-sm font-semibold ${buttonClasses} ${
        disabled && 'cursor-not-allowed'
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default ActionButton;
