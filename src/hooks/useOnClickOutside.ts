/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, RefObject, BaseSyntheticEvent } from 'react';

const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: () => void,
  condition = true
) => {
  const handleClick = (e: BaseSyntheticEvent | MouseEvent) => {
    if (condition && !ref.current?.contains(e.target)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  });
};

export default useOnClickOutside;
