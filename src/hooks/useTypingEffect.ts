import { useState, useEffect } from 'react';

const useTypingEffect = (value: string) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let i = 0;

    const intervalId = setInterval(() => {
      setText(prev => {
        if (i === value.length) {
          clearInterval(intervalId);
          return prev;
        }
        return prev + value[i++];
      });
    }, 25);

    return () => setText('');
  }, [value]);

  return text;
};

export default useTypingEffect;
