import { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
};

export const PrimaryButton = ({
  onClickHandler,
  className,
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClickHandler}
      disabled={disabled}
      className={`${
        disabled && 'cursor-not-allowed'
      } rounded-xl bg-primary px-3 py-1.5 text-sm font-semibold text-white hover:bg-secondary ${className}`}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({
  onClickHandler,
  className,
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClickHandler}
      disabled={disabled}
      className={`${
        disabled && 'cursor-not-allowed'
      } rounded-xl px-3 py-1.5 text-sm font-semibold text-black border border-solid border-border-default hover:bg-secondary-hover ${className}`}
    >
      {children}
    </button>
  );
};
