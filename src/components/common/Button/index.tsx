import { MouseEventHandler, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

type ActionButtonProps = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  variant: ButtonVariant;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
};

const ActionButton = ({
  onClickHandler,
  variant,
  className,
  disabled = false,
  children,
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
      {children}
    </button>
  );
};

export default ActionButton;
