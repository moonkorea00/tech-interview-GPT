import { ActionButtonProps } from '@@types/form';

const ActionButton = ({
  onClickHandler,
  variant,
  label,
  className,
  disabled = false,
}: ActionButtonProps) => {
  const buttonClasses =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-secondary'
      : 'text-black border border-solid border-border-default hover:bg-secondary-hover';

  return (
    <button
      onClick={onClickHandler}
      className={`rounded-xl px-3 py-1.5 text-sm font-semibold ${buttonClasses} ${
        disabled && 'cursor-not-allowed'
      } ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default ActionButton;
