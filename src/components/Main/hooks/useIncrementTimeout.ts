import { useState, useEffect } from 'react';

const useIncrementTimeout = (condition: boolean, maxCount: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (condition && count < maxCount) {
      timer = setTimeout(() => {
        setCount(prev => prev + 1);
      }, 800);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [count, condition]);

  return { count };
};

export default useIncrementTimeout;
