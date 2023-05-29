import type { RefObject } from 'react';
import { useEffect } from 'react';

const useScrollToRef = <T extends HTMLElement, D>(
  ref: RefObject<T>,
  condition: boolean | number = true,
  deps: D
) => {
  useEffect(() => {
    if (condition && ref.current) {
      ref.current.scrollIntoView();
    }
  }, [ref, condition, deps]);
};

export default useScrollToRef;
