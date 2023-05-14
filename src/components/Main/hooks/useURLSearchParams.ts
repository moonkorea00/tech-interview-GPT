import { useSearchParams } from 'react-router-dom';

const useURLSearchParams = (cb: Function) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setURLSearchParams = (key: string, value: string) => {
    setSearchParams(prev => {
      searchParams.set(key, value);
      return prev;
    });
    cb();
  };

  return { searchParams, setURLSearchParams };
};

export default useURLSearchParams;
